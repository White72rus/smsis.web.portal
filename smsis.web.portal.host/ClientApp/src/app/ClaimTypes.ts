//  Microsoft.NETCore.App.Ref\3.1.0\ref\netcoreapp3.1\System.Security.Claims

/**
 * Claim types. From .NETCore "System.Security.Claims"
 */
export class ClaimTypes {
    public static readonly Actor : string = "http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor";
    public static readonly PostalCode : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/postalcode";
    public static readonly PrimaryGroupSid : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/primarygroupsid";
    public static readonly PrimarySid : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/primarysid";
    public static readonly Role : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    public static readonly Rsa : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/rsa";
    public static readonly SerialNumber : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/serialnumber";
    public static readonly Sid : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid";
    public static readonly Spn : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/spn";
    public static readonly StateOrProvince : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/stateorprovince";
    public static readonly StreetAddress : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/streetaddress";
    public static readonly Surname : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname";
    public static readonly System : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/system";
    public static readonly Thumbprint : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/thumbprint";
    public static readonly Upn : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn";
    public static readonly Uri : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/uri";
    public static readonly UserData : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata";
    public static readonly Version : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/version";
    public static readonly Webpage : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/webpage";
    public static readonly WindowsAccountName : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname";
    public static readonly WindowsDeviceClaim : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsdeviceclaim";
    public static readonly WindowsDeviceGroup : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsdevicegroup";
    public static readonly WindowsFqbnVersion : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsfqbnversion";
    public static readonly WindowsSubAuthority : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowssubauthority";
    public static readonly OtherPhone : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/otherphone";
    public static readonly NameIdentifier : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
    public static readonly Name : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name";
    public static readonly MobilePhone : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone";
    public static readonly Anonymous : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/anonymous";
    public static readonly Authentication : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/authentication";
    public static readonly AuthenticationInstant : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/authenticationinstant";
    public static readonly AuthenticationMethod : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/authenticationmethod";
    public static readonly AuthorizationDecision : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/authorizationdecision";
    public static readonly CookiePath : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/cookiepath";
    public static readonly Country : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/country";
    public static readonly DateOfBirth : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/dateofbirth";
    public static readonly DenyOnlyPrimaryGroupSid : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/denyonlyprimarygroupsid";
    public static readonly DenyOnlyPrimarySid : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/denyonlyprimarysid";
    public static readonly DenyOnlySid : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/denyonlysid";
    public static readonly WindowsUserClaim : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsuserclaim";
    public static readonly DenyOnlyWindowsDeviceGroup : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/denyonlywindowsdevicegroup";
    public static readonly Dsa : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/dsa";
    public static readonly Email : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";
    public static readonly Expiration : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/expiration";
    public static readonly Expired : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/expired";
    public static readonly Gender : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/gender";
    public static readonly GivenName : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname";
    public static readonly GroupSid : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/groupsid";
    public static readonly Hash : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/hash";
    public static readonly HomePhone : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/homephone";
    public static readonly IsPersistent : string = "http://schemas.microsoft.com/ws/2008/06/identity/claims/ispersistent";
    public static readonly Locality : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/locality";
    public static readonly Dns : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/dns";
    public static readonly X500DistinguishedName : string = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/x500distinguishedname";
}