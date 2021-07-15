guest_array= [];

function submit(){
    var display_guest_array = [];

    for(var j = 1; j <= 1; j++){
        var name_of_the_guest = document.getElementById("name_of_the_guest_" + j).value ;
        console.log (name_of_the_guest);
        student_array.push (name_of_the_guest);
    }
    console.log (guest_array);

    var length_of_guest_array = guest_array.length;
    console.log (length_of_guest_array);

 
function sorting(){
    student_array.sort();
    console.log (student_array);

    var display_student_array_sorting = [];

    var length_of_student_array = student_array.length;
    for (var k = 0; k < length_of_student_array; k++) { 
        display_student_array_sorting.push("<h4>NAME- " + student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
         } 
         var remove_commas = display_student_array_sorting.join(" ");
          console.log(remove_commas); 
          document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}