$("#add_employee").submit(function(event){
    let employeeID = 0
    employeeID += 1;
    document.getElementById("e_ID") = employeeID;
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


    $(document).ready(function($) {
        $(".clickable-row").click(function() {
            $("tbody tr").removeClass("active")
            $(this).addClass("active")
     
       
        });

        $(".clickable-row").dblclick(function() {
            $(this).removeClass("active")
        });
    });


if(window.location.pathname == "/"){
        $ondelete = $("#add-appointmentRequest tbody tr td a.delete");
        $ondelete.click(function(){

            var id = $(this).attr("data-id")
            var request = {
                "url":`http://localhost:5000/api/appointmentRequest/${id}`,
                "method": "DELETE"
            }    

            if(confirm("Do you want to confirm this appointment request?")){
                $.ajax(request).done(function(response){
                    alert("Appointment Request Confirmed Successfully");
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
    });

    if(window.location.pathname == "/appointment"){
        $ondelete = $("#add-appointment tbody tr td a.delete");
        $ondelete.click(function(){

            var id = $(this).attr("data-id")
            var request = {
                "url":`http://localhost:5000/appointment/${id}`,
                "method": "DELETE"
            }    

            if(confirm("Do you want to confirm this appointment?")){
                $.ajax(request).done(function(response){
                    alert("Appointment Confirmed Successfully");
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
    });


  