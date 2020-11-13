
$(document).ready(function(){

  //adding new element in todo section
	$(".add").click(function(){     
		$(this).parent("#new-task");
		var itemName=$("#new-task").val().trim();
		if(itemName=="")
		{
			return;
		}
		else{
			$("#new-task").val(' ');
			$('#incomplete-tasks').append('<li class="todo"><input type="checkbox" class="todo_section"><label class="todo_section_label">'+itemName+'</label><input type="text" class="todo_section_input"><button class="edit">Edit</button><button class="delete">Delete</button></li>');
		}
	});	

	//adding element in complete section
	$('#incomplete-tasks').on('click','.todo_section', function() {
				
		var itemName=$(this).parents(".todo").find('.todo_section_label').text().trim();
		if(itemName=="")
		{
				return;
		}
		else{
				$('#completed-tasks').append('<li class="complete"><input type="checkbox" checked class="complete_section"><label class="complete_section_label">'+itemName+'</label><input type="text" class="complete_section_input"><button class="edit">Edit</button><button class="delete">Delete</button></li>');
				$(this).parents(".todo").remove();
		}
	});

	//adding element back to todo section
	$('#completed-tasks').on('click','.complete_section', function() {

		var itemName=$(this).parents(".complete").find('.complete_section_label').text().trim();
		if(itemName=="")
		{
			return;
		}
		else{
			$('#incomplete-tasks').append('<li class="todo"><input type="checkbox" class="todo_section"><label class="todo_section_label">'+itemName+'</label><input type="text" class="todo_section_input"><button class="edit">Edit</button><button class="delete">Delete</button></li>');
			$(this).parents(".complete").remove();
		}
	});
	
	//deleting element of complete section
	$('#completed-tasks').on('click','.delete', function() {	 		  
		$(this).parents(".complete").remove();
	});
	 
	//deleting element of todo section
	$('#incomplete-tasks').on('click','.delete', function() {	 		  
		$(this).parents(".todo").remove();
	});	 
	 
	 //editing element of todo section
	$('#incomplete-tasks').on('click','.edit', function() {
	 	
	 if($(this).parents(".todo").hasClass("editMode")){		
		var itemName=$(this).parents(".todo").find('.todo_section_input').val().trim();
		$(this).parents(".todo").find('.todo_section_label').text(itemName);
		$(this).parents(".todo").find('.todo_section_input').attr( 'value',itemName);
		$(this).parents(".todo").removeClass("editMode");
	 }
	 else{
		$(this).parents(".todo").addClass("editMode");
		var itemName=$(this).parents(".todo").find('.todo_section_label').text().trim();
	 	$(this).parents(".todo").find('.todo_section_input').attr( 'value',itemName);
	 }		
	});
	 
	//editing element of complete section
	$('#completed-tasks').on('click','.edit', function() {	 	
	 if($(this).parents(".complete").hasClass("editMode")){		
		var itemName=$(this).parents(".complete").find('.complete_section_input').val().trim();
		$(this).parents(".complete").find('.complete_section_label').text(itemName);
		$(this).parents(".complete").find('.complete_section_input').attr( 'value',itemName);
		$(this).parents(".complete").removeClass("editMode");
	 }
	 else{
		$(this).parents(".complete").addClass("editMode");
		var itemName=$(this).parents(".complete").find('.complete_section_label').text().trim();
	  $(this).parents(".complete").find('.complete_section_input').attr( 'value',itemName);
	 }
		
	});
});
