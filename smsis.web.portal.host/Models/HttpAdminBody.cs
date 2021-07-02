namespace smsis.web.portal.host.Models
{
    public class HttpAdminBody
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public bool Read { get; set; }
        public bool Write { get; set; }
        public bool Edit { get; set; }
        public bool Delete { get; set; }
    }
}
