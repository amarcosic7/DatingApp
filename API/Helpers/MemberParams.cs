namespace API.Helpers;

public class MemberParams : PagingParams
{
    public string? Gender { get; set; }
    public string? CurrentMemberId { get; set; }
    public int minAge { get; set; } = 18;
    public int maxAge { get; set; } = 100;
}
