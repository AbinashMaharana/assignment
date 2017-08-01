 $(document).ready(function(){
            var txt = "";
            $.ajax({
                type:"GET",
                url:"mydata.json",
                dataType:"JSON",
                success:function(data){
                $.each(data,function(k,v){
                   if(v.type == "text"){
                   txt +="<div class='form-group col-md-6 col-sm-12 col-xs-12'>";
                   txt +="<label>"+v.label+"</label>";       
                   txt +="<input class='"+v.className+"' type='"+v.type+"' name='"+v.name+"' placeholder='"+v.placeholder+"' maxlength='"+v.maxlength+"'>";       
                   txt += "</div>";
                   } 
                  else if(v.type == "textarea"){
                   txt +="<div class='form-group col-md-6 col-sm-12 col-xs-12'>";
                   txt +="<label>"+v.label+"</label>";       
                   txt +="<textarea class='"+v.className+"' type='"+v.type+"' name='"+v.name+"' placeholder='"+v.placeholder+"'>";   
                   txt += "</textarea>";
                   txt += "</div>";
                   }
                else if(v.type == "radio-group"){
                     txt +="<div class='form-group col-md-6 col-sm-12 col-xs-12'>";
                $.each(v.values,function(key,val){ 
                   txt +="<label>"+val.label+"</label>"; 
                    if(val.selected == true){
                   txt +="<input class='"+v.className+"' type='radio' name='"+v.name+"' value='"+val.value+"' checked='"+val.selected+"'>";
                    }else{
                    txt +="<input class='"+v.className+"' type='radio' name='"+v.name+"' value='"+val.value+"'>";    
                    }
                     });
                      txt += "</div>";
                     }else if(v.type == "button") {
                    txt +="<div class='form-group text-center col-md-12 col-sm-12 col-xs-12'>";
                   txt +="";       
                   txt +="<input class='"+v.className+"' subtype='"+v.subtype+"' type='"+v.type+"' name='"+v.name+"' value='"+v.value+"' >";      
                   txt += "</div>";    
                  }
                }); 
                $("#formContainer").html(txt);   
                }
            });
        });