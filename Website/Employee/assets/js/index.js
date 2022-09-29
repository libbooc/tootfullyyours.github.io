$("#add_employee").submit(function(event){
    alert("Data Inserted Successfully!")
})

$("#update_employee").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n["value"]
    })

    console.log(data);

    var request = {
        "url":`http://localhost:5000/api/employee/${data.id}`,
        "method": "PUT",
        "data": data    
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully")
    })

    })

if(window.location.pathname == "/"){
        $ondelete = $("#add-employee tbody td a.delete");
        $ondelete.click(function(){
            var id = $(this).attr("data-id")
            var request = {
                "url":`http://localhost:5000/api/employee/${id}`,
                "method": "DELETE"
            }    

            if(confirm("Do you really want to delete this record?")){
                $.ajax(request).done(function(response){
                    alert("Data Deleted Successfully");
                    location.reload();
                })
            }
        })
    }

    $("#search-box").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    })

    $(document).ready(function($) {
        $(".clickable-row").click(function() {
            $("tbody tr").removeClass("active")
            $(this).addClass("active")

        });

        $(".clickable-row").dblclick(function() {
            $(this).removeClass("active")
        });
    });
