using System.Text;
using System;

namespace smsis.web.portal.host.Infrastructure
{
    internal static class Encodes
    {
        internal static string ToBase64(string word)
        {
            byte[] bytes = Encoding.UTF8.GetBytes(word);
            return Convert.ToBase64String(bytes);
        }

        internal static string FromBase64(string word)
        {
            byte[] bytes = Convert.FromBase64String(word);
            return Encoding.UTF8.GetString(bytes);
        }
    }
}
