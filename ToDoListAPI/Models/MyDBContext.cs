using Microsoft.EntityFrameworkCore;

namespace ToDoListAPI.Models
{
    public class MyDBContext : DbContext
    {
        public DbSet<Task> Tasks { get; set; }
        public MyDBContext(DbContextOptions<MyDBContext>
       options) : base(options)
        {
        }
    }
}
