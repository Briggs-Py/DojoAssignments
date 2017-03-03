var students = [
 {first_name :  'Michael', last_name : 'Jordan'},
 {first_name : 'John', last_name : 'Rosales'},
 {first_name : 'Mark', last_name : 'Guillen'},
 {first_name : 'KB', last_name : 'Tonel'}
]
for(var name in students){
  console.log(students[name].first_name, students[name].last_name);
}
