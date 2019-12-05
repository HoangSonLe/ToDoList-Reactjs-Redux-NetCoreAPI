using System.ComponentModel.DataAnnotations;

namespace ToDoListAPI.Models
{
    public class Task
    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        //0:small; 1;medium; 2: high
        [Required]
        public int Level { get; set; }
    }
}
