using System;

namespace API.Entities;

public class Photo
{
    public int Id { get; set; }
    public required string Url { get; set; }

    public string? PublicID { get; set; }

    //Navigation property
    public Member Member { get; set; }= null!;
}