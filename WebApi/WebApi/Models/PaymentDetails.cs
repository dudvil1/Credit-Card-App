using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class PaymentDetails
    {
        [Key]
        public int PMId { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string CardOwnerName { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(16)")]
        public int CardNumber { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(5)")]
        public string ExperationDate { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(3)")]
        public int CVV { get; set; }
    }
}
