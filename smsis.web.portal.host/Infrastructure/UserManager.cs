using smsis.web.portal.host.Infrastructure.Interfaces;
using smsis.web.portal.host.Infrastructure.Models;
using smsis.web.portal.DAL.Interfaces;
using Microsoft.Extensions.Logging;
using System.Security.Cryptography;
using System.Security.Claims;
using System.Text;
using System;
using System.Collections.Generic;

namespace smsis.web.portal.host.Infrastructure
{
    public class UserManager : IUserManager
    {
        private readonly IUsersRepository _userRepository;
        private readonly IClaimsRepository _claimsRepository;
        private readonly ILogger _logger;

        public UserManager(IUsersRepository userRepository, IClaimsRepository claimsRepository, ILogger<UserManager> logger)
        {
            _userRepository = userRepository;
            _claimsRepository = claimsRepository;
            _logger = logger;
        }

        public IList<User> GetAll()
        {
            var users = _userRepository.GetAll();
            List<User> result = new List<User>();
            foreach (var item in users)
            {
                result.Add(new User
                {
                    Name = item.Name,
                    Email = item.Email,
                    Role = item.Role,
                    Login = item.Login,
                });
            }
            return result;
        }

        /// <summary>
        /// Create user.
        /// </summary>
        /// <param name="user"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public UserResult Create(User user, string password)
        {
            UserResult userResult = new UserResult {
                Successfully = false,
            };

            var result = _userRepository.Create(new DAL.Entityes.UserEntity
            {
                Name = user.Name,
                Email = user.Email,
                Login = user.Login,
                Role = user.Role,
                Id = new Guid(),
                Password = Sha512(password),
            });

            if (!result)
            {
                _logger.LogWarning($"User {user.Name} is exist");
                return userResult;
            }

            userResult.Successfully = true;
            return userResult;
        }

        /// <summary>
        /// Delete user.
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public UserResult Delete(string userName)
        {
            UserResult userResult = new UserResult
            {
                Successfully = false,
            };

            var userReturn = _userRepository.FindByName(userName);

            var result = false;

            if (userReturn != null)
            {
                result = _userRepository.Delete(userReturn);
            }

            if (!result)
            {
                _logger.LogWarning($"User {userName} is exist");
                return userResult;
            }

            userResult.Successfully = true;
            return userResult;
        }

        /// <summary>
        /// Find user by name.
        /// </summary>
        /// <param name="userName"></param>
        /// <returns>Return Users or null if not exist</returns>
        public User FindByName(string userName)
        {
            var result = _userRepository.FindByName(userName);
            if (result != null)
            {
                return new User
                {
                    Name = result.Name,
                    Login = result.Login,
                    Email = result.Email,
                    Role = result.Role,
                };
            }
            return null;
        }

        /// <summary>
        /// Verified password.
        /// </summary>
        /// <param name="user"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public SignInResult PasswordSignIn(User user, string password)
        {
            var result = new SignInResult
            {
                Successfully = false,
            };
            var _user = _userRepository.FindByName(user.Name);

            var verifyPass = Sha512(password);

            if (string.Equals(_user.Password, verifyPass))
            {
                result.Successfully = true;
                return result;
            }
            return result;
        }

        /// <summary>
        /// Add Claims.
        /// </summary>
        /// <param name="user"></param>
        /// <param name="claim"></param>
        /// <returns></returns>
        public UserResult AddClaim(User user, Claim claim)
        {
            UserResult userResult = new UserResult
            {
                Successfully = false,
            };

            var userId = _userRepository.FindByName(user.Name).Id;

            var result = _claimsRepository.Add(new DAL.Entityes.ClaimEntity {
                UserId = userId,
                ClaimType = claim.Type,
                ClaimValue = claim.Value,
            });

            if (!result)
            {
                _logger.LogWarning($"Claim type: {claim.Type} is exist");
                return userResult;
            }

            userResult.Successfully = true;
            return userResult;
        }

        /// <summary>
        /// Get Claims.
        /// </summary>
        /// <param name="user"></param>
        /// <returns></returns>
        public IList<Claim> GetClaims(User user)
        {
            var userResult = _userRepository.FindByName(user.Name);

            IList<DAL.Entityes.ClaimEntity> claims = _claimsRepository.Get(userResult);

            var list = new List<Claim>();

            foreach (var item in claims)
                list.Add(new Claim(item.ClaimType, item.ClaimValue));

            return list;
        }

        private static string Sha512(string word)
        {
            byte[] date = Encoding.UTF8.GetBytes(word);
            using (SHA512 shaM = new SHA512Managed())
            {
                byte[] result = shaM.ComputeHash(date);
                return BitConverter.ToString(result).Replace("-", String.Empty);
            }
        }
    }
}
