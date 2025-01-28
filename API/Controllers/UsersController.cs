using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API;

[ApiController]
[Route("api/[controller]")] // /api/users
public class UsersController(DataContext context) : ControllerBase
{
  [HttpGet]
  public async Task<ActionResult<IEnumerable<AppUsers>>> GetUsers()
  {
    var users = await context.Users.ToListAsync();

    return users;
  }

  [HttpGet("{ID:int}")]  // /api/users/2
  public async Task<ActionResult<AppUsers>> GetUser(int ID)
  {
    var user = await context.Users.FindAsync(ID);

    if (user == null) return NotFound();

    return user;
  }
}