
/*function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(0);
  var cell3 = row.insertCell(0);
  var cell4 = row.insertCell(0);
  cell1.innerHTML = "1";
  cell2.innerHTML = "20000";
  cell3.innerHTML = "تصميم المواقع";
  cell4.innerHTML = "8";
}
function myFunction1() {
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(0);
      var cell3 = row.insertCell(0);
      var cell4 = row.insertCell(0);
      cell1.innerHTML = "1";
      cell2.innerHTML = "1800";
      cell3.innerHTML = "اشتراك في نظام ساس المحاسبي لمدة سنة ميلادية ";
      cell4.innerHTML = "17";
    }
    function myFunction2() {
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(0);
      var cell3 = row.insertCell(0);
      var cell4 = row.insertCell(0);
      cell1.innerHTML = "1";
      cell2.innerHTML = "1800";
      cell3.innerHTML = "اشتراك في نظام ساس المحاسبي لمدة سنة ميلادية ";
      cell4.innerHTML = "61";
    }
 
    function myFunction3() {
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(0);
      var cell3 = row.insertCell(0);
      var cell4 = row.insertCell(0);
      cell1.innerHTML = "1";
      cell2.innerHTML = "900";
      cell3.innerHTML = ""
      cell4.innerHTML = "71";
    }
   function myFunction3() {
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(0);
      var cell3 = row.insertCell(0);
      var cell4 = row.insertCell(0);
      cell1.innerHTML = "1";
      cell2.innerHTML = "900";
      cell3.innerHTML = ">اشتراك في  نظام ساس المحاسبي لمدة سنة ميلادية ابتداء من تاريخ بدء الفاتورة بسعر مخفض 50%";
      cell4.innerHTML = "131";
    }
    function myFunction4() {
      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(0);
      var cell3 = row.insertCell(0);
      var cell4 = row.insertCell(0);
      var cell5 = row.insertCell(0);
      cell1.innerHTML = "1";
      cell2.innerHTML = "900";
      cell3.innerHTML = "اشتراك في  نظام ساس المحاسبي لمدة سنة من تاريخ بدء الفاتورة";
      cell4.innerHTML = "170";
      cell5.innerHTML =    document.getElementById("myTable").deleteRow(1);;
    }
    document.getElementById("myFounction").deleteRow(0);
   */
    $(function () {

      // Start counting from the third row
      var counter = 1;
  
      $("#insertRow").on("click", function (event) {
          event.preventDefault();
  
          var newRow = $("<tr>");
          var cols = '';
  
          // Table columns
          cols += '<td>8</td>';
          cols += '<td>تصميم تطبيقات</td>';
          cols += '<td>20000</td>';
          cols += '<th scrope="row">' + counter + '</th>';
          cols += '<td>20000</td>';
        
          cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';
  
          // Insert the columns inside a row
          newRow.append(cols);
  
          // Insert the row inside a table
          $("#myTable").append(newRow);
  
          // Increase counter after each row insertion
          counter++;
      });
  
      // Remove row when delete btn is clicked
      $("#myTable").on("click", "#deleteRow", function (event) {
          $(this).closest("tr").remove();
          counter -= 1
      });
  });
  $(function () {

      // Start counting from the third row
      var counter = 1;
  
      $("#insertRow1").on("click", function (event) {
          event.preventDefault();
  
          var newRow = $("<tr>");
          var cols = '';
  
          // Table columns
          cols += '<td>16</td>';
          cols += '<td>اشتراك في نظام ساس المحاسبي لمدة سنة ميلادية </td>';
          cols += '<td>1800</td>';
          cols += '<th scrope="row">' + counter + '</th>';
          cols += '<td>1800</td>';
        
          cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';
  
          // Insert the columns inside a row
          newRow.append(cols);
  
          // Insert the row inside a table
          $("#myTable").append(newRow);
  
          // Increase counter after each row insertion
          counter++;
      });
  
      // Remove row when delete btn is clicked
      $("#myTable").on("click", "#deleteRow", function (event) {
          $(this).closest("tr").remove();
          counter -= 1
      });
  });
  $(function () {

      // Start counting from the third row
      var counter = 1;
  
      $("#insertRow2").on("click", function (event) {
          event.preventDefault();
  
          var newRow = $("<tr>");
          var cols = '';
  
          // Table columns
          cols += '<td>17</td>';
          cols += '<td>اشتراك في نظام ساس المحاسبي لمدة سنة ميلادية </td>';
          cols += '<td>1800</td>';
          cols += '<th scrope="row">' + counter + '</th>';
          cols += '<td>1800</td>';
        
          cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';
  
          // Insert the columns inside a row
          newRow.append(cols);
  
          // Insert the row inside a table
          $("#myTable").append(newRow);
  
          // Increase counter after each row insertion
          counter++;
      });
  
      // Remove row when delete btn is clicked
      $("#myTable").on("click", "#deleteRow", function (event) {
          $(this).closest("tr").remove();
          counter -= 1
      });
  });
  $(function () {

      // Start counting from the third row
      var counter = 1;
  
      $("#insertRow3").on("click", function (event) {
          event.preventDefault();
  
          var newRow = $("<tr>");
          var cols = '';
  
          // Table columns
          cols += '<td>117</td>';
          cols += '<td>>اشتراك في  نظام ساس المحاسبي لمدة سنة ميلادية ابتداء من تاريخ بدء الفاتورة بسعر مخفض 50%";</td>';
          cols += '<td>1800</td>';
          cols += '<th scrope="row">' + counter + '</th>';
          cols += '<td>1800</td>';
        
          cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';
  
          // Insert the columns inside a row
          newRow.append(cols);
  
          // Insert the row inside a table
          $("#myTable").append(newRow);
  
          // Increase counter after each row insertion
          counter++;
      });
  
      // Remove row when delete btn is clicked
      $("#myTable").on("click", "#deleteRow", function (event) {
          $(this).closest("tr").remove();
          counter -= 1
      });
  });
  $(function () {

      // Start counting from the third row
      var counter = 1;
  
      $("#insertRow4").on("click", function (event) {
          event.preventDefault();
  
          var newRow = $("<tr>");
          var cols = '';
  
          // Table columns
          cols += '<td>131</td>';
          cols += '<td>>اشتراك في  نظام ساس المحاسبي لمدة سنة ميلادية ابتداء من تاريخ بدء الفاتورة   %";</td>';
          cols += '<td>1800</td>';
          cols += '<th scrope="row">' + counter + '</th>';
          cols += '<td>1800</td>';
        
          cols += '<td><button class="btn btn-danger rounded-0" id ="deleteRow"><i class="fa fa-trash"></i></button</td>';
  
          // Insert the columns inside a row
          newRow.append(cols);
  
          // Insert the row inside a table
          $("#myTable").append(newRow);
  
          // Increase counter after each row insertion
          counter++;
      });
  
      // Remove row when delete btn is clicked
      $("#myTable").on("click", "#deleteRow", function (event) {
          $(this).closest("tr").remove();
          counter -= 1
      });
  });