
        const noteb = document.querySelectorAll(".note-b");
        const clock = document.querySelector(".clock");
        const notePopUp = document.querySelector(".note");
        const editPageContainer = document.querySelector(".edit-container");
        const editBackBtn = document.querySelector(".back-btn");
        const okBackBtn = document.querySelector(".ok-btn");
        const editAreaTitle= document.querySelector(".edit-area");
        const editAreaText = document.querySelector(".edit-text");
        const areyousure = document.querySelector(".areyousure");
        const notesContaineroverflow = document.querySelector(".notes-container"); 
        //search-box
        const notesSearch = document.querySelector(".notes-brand-menu");
        const searchBar = document.querySelector(".sb-container");
        const searchBox = document.querySelector(".search-box");
        const notesSearchChild = document.querySelector(".search-box-container");

        function flowleft() {

                notesContaineroverflow.scrollLeft = 0;

            setTimeout(flowleft, 000);
        }

        flowleft()
        notesSearch.addEventListener("click", ()=>{
            searchBox.focus();
        })

        //searchbox
        document.addEventListener("mousedown", (e)=>{

           
            if (e.target.parentNode === notesSearch || e.target.parentNode === notesSearchChild || e.target.parentNode === searchBar){
                searchBar.style.top = "0";
            }else{
               searchBar.style.top = "-250px"; 
               searchBox.value = "";
            }

        })

        function updateNote(){
            //nmonotes
            const notesContentLength = document.querySelectorAll(".notes-content-container .notes-content");
            const noNoteContainer = document.querySelector(".no-note");
            notsBrand = document.querySelector(".notes-brandalt");
         
            function noNotesShow() {
                if (notesContentLength.length <= 0) {
                    noNoteContainer.style.display = "flex";

                } else {
                    noNoteContainer.style.display = "none";

                }
            }
            noNotesShow()
        }

        const clockNav = () => {
                const today = new Date(); 
                let hours = today.getHours();
                let minutes = today.getMinutes();
                const ampm = hours >= 12 ? 'AM' : 'PM';

                hours %= 12;
                hours = hours || 12;
                minutes = minutes < 10 ? `0${minutes}` : minutes;

                clock.innerHTML = `${hours}:${minutes} ${ampm}`;
                setTimeout(clockNav, 1000);
            };
        clockNav()
          

        notePopUp.addEventListener("mousedown", ()=>{
            notesContaineroverflow.scrollTop = 0;             
            notesContaineroverflow.scrollLeft = 0;             
            editPageContainer.style.display = "flex";
            editPageContainer.style.left = "400px";
             valuetrim = 1;
            setTimeout(popupAnim,000)
            function popupAnim() {               
                editPageContainer.style.left = "0px";            
                editPageContainer.style.transform = "scale(1)";             
                notesContaineroverflow.style.overflowY = "hidden";
            }
        })
        //valuetrim
        let valuetrim = 1;
        editPageContainer.addEventListener("keyup", ()=>{
            
            if (editAreaTitle.value.trim().length > 0 || editAreaText.value.trim().length > 0) {
                valuetrim = 0;
                okBackBtn.style.visibility = "visible";
            }else{
                valuetrim = 1;
                okBackBtn.style.visibility = "hidden";
            }

        })

        editPageContainer.addEventListener("keydown", () => {

                if (editAreaTitle.value.trim().length > 0 || editAreaText.value.trim().length > 0) {
                    valuetrim = 0;
                    okBackBtn.style.visibility = "visible";
                } else {
                    valuetrim = 1;
                    okBackBtn.style.visibility = "hidden";
                }

            })

         function editClose() {
                areyousure.style.transform = "translate(-50%) scale(0)"
                editPageContainer.style.left = "-500px";
                editAreaTitle.value = "";
                editAreaText.value = "";
                okBackBtn.style.visibility = "hidden";
                valuetrim = 1;
                setTimeout(defaultStyles, 500)
                function defaultStyles() {
                    editPageContainer.style.left = "0px";
                    editPageContainer.style.display = "none";
                    editPageContainer.style.transform = "scale(0.55)";
                }
            }  

        const aresureCancel = document.querySelector(".cancel")
        const aresureYes = document.querySelector(".yes")
        aresureCancel.addEventListener("click", () => {              
                areyousure.style.transform = "translate(-50%) scale(0)"
            })
            aresureYes.addEventListener("click", () => {
                areyousure.style.transform = "translate(-50%) scale(0)"
                editClose()
                notesContaineroverflow.style.overflowY = "auto";
            })
        editBackBtn.addEventListener("click", ()=>{
            if (valuetrim <= 0) {
                areyousure.style.transform="translate(-50%) scale(1)"
            }else{
                editClose()  
                notesContaineroverflow.style.overflowY = "auto";
            }
            
        })

        
        
        function index() {
        
            if (editAreaTitle.value.trim().length === 0) {
                editAreaTitle.value = "My Note"
            }
            const notesContainer = document.querySelector(".notes-content-container")
            const noteCont = document.createElement('div')
            const editCont = document.createElement('div')
            noteCont.className = "notes-wrap"

            noteCont.innerHTML =
            `<div class="notes-content">
                    <div class="note-header">
                        <div class="note-title"></div>
                        <div class="dropdown">
                            <button class="note-options">
                                <i class="fa-solid fa-ellipsis-vertical"></i>
                            </button>
                            <div class="note-options-drop">
                                <button class="drop-btn edit">Edit</button>
                                <button class="drop-btn delete">Delete</button>
                            </div>
                        </div>
                    </div>
                    <div class="note-b">
                        <div class="note-text">
                        </div>
                        <div class="date"></div>
                    </div>
                    
                </div>
                <div class="deletecontent"><i class="fa-regular fa-trash-can"></i></div>`;    
            
            editCont.innerHTML = `
            <div class="edited-container">

                    <div class="edited-header">
                       
                    <div class="edited-title">
                         <button class="editedback-btn"><i class="fa-solid fa-angle-left"></i></button>
                                    <input maxlength="18" class="edited-area" type="text" placeholder="Title">
                         <button class="editedok-btn"><i class="fa-solid fa-check"></i></button>
                    </div>
                    
                        </div>
                        <div class="edited-textarea">
                            <textarea class="edited-text" id="" cols="30" rows="10" placeholder="Description"></textarea>
                    </div>
                        
            </div>`    
            notesContainer.prepend(noteCont)
            notesContainer.prepend(editCont)
            const noteHeader = document.querySelector(".notes-wrap .note-title")
            const noteText = document.querySelector(".notes-wrap .note-text")
            noteHeader.textContent = editAreaTitle.value;
            noteText.textContent = editAreaText.value;

            const dateNote = document.querySelector(".date");


          
            const today = new Date();
            const monthName = today.toString().split(' ')[1]
            let mont = today.getMonth() + 1;
            let Year = today.getFullYear();
            let hours = today.getHours();
            let minutes = today.getMinutes();
            const ampm = hours >= 12 ? 'AM' : 'PM';

            hours %= 12;
            hours = hours || 12;
            minutes = minutes < 10 ? `0${minutes}` : minutes;
            dateNote.innerHTML = `<i class="fa-regular fa-calendar"></i>${mont} ${monthName} ${Year.toString().substr(-2)} - ${hours}:${minutes} ${ampm}`;

             

   
            const editArenaBtn = document.querySelector(".edit");
            const removeNote = document.querySelector(".delete");
            const notesContent = document.querySelector(".notes-content");
            const deletecontent = document.querySelector(".deletecontent");
            const noTedropd = document.querySelector(".note-options-drop");
            const noteoptions = document.querySelector(".note-options");
            const noteswrap = document.querySelector(".notes-wrap");
            //edited area
            const editedContainer = document.querySelector(".edited-container");
            const editedBackBtn = document.querySelector(".editedback-btn");
            const editedOkBtn = document.querySelector(".editedok-btn");
            const editedAreaInput = document.querySelector(".edited-area");
            const editedTextInput = document.querySelector(".edited-text");
            const areyousureedited = document.querySelector(".areyousureedited");
            const yesE = document.querySelector(".yesE");
            const cancelE = document.querySelector(".cancelE");
            



            removeNote.addEventListener("mousedown", () => {
                notesContent.style.left = "-14%";
               
            })
            deletecontent.addEventListener("mousedown", () => {
                noteswrap.style.opacity = "0";

                setTimeout(() => {
                    noteswrap.style.margin = "0";
                    noteswrap.style.height = "0px";
                }, 250);


                setTimeout(() => {
                    noteCont.remove()
                    updateNote()
                }, 500);
            })

            document.addEventListener("mousedown", (e) => {
                if (e.target === removeNote) {
                    return;
                } else {
                    notesContent.style.left = "0%";
                }
            })




            editedContainer.addEventListener("keyup", () => {
                if (editedAreaInput.value.trim().length > 0 || editedTextInput.value.trim().length > 0) {
                    valuetrim = 0;
                    editedOkBtn.style.visibility = "visible";
                } else {
                    valuetrim = 1;
                    editedOkBtn.style.visibility = "hidden";
                }

            })
            editedContainer.addEventListener("keydown", () => {
                if (editedAreaInput.value.trim().length > 0 || editedTextInput.value.trim().length > 0) {
                    valuetrim = 0;
                    editedOkBtn.style.visibility = "visible";
                } else {
                    valuetrim = 1;
                    editedOkBtn.style.visibility = "hidden";
                }

            })

            function editEDclose() {
                editedContainer.style.left = "600px";
                notesContaineroverflow.style.overflowY = "auto";
            }
            
            

            editArenaBtn.addEventListener("mousedown", (e) => {
                 editedOkBtn.style.visibility = "hidden";
                notesContaineroverflow.scrollTop = 0; 
                notesContaineroverflow.scrollLeft = 0;  
                editedAreaInput.value = noteHeader.textContent;
                editedTextInput.value = noteText.textContent;
                editedContainer.style.left = "0";
                notesContaineroverflow.style.overflowY = "hidden";
                
            })

            function editedAreYouSure() {
                editEDclose()
                notesContaineroverflow.style.overflowY = "auto";
            }
            editedBackBtn.addEventListener("mousedown", (e) => {
                if (valuetrim === 0 ) {
                    areyousureedited.style.transform = "translate(-50%) scale(1)";
                }else{
                    editEDclose()
                }
            })

            yesE.addEventListener("mousedown", (e) => {
                editEDclose()
                areyousureedited.style.transform = "translate(-50%) scale(0)";
                valuetrim = 1;
            })

            cancelE.addEventListener("mousedown", (e) => {
                areyousureedited.style.transform = "translate(-50%) scale(0)";
                valuetrim = 0;
            })

            editedOkBtn.addEventListener("mousedown", (e) => {
              areyousureedited.style.transform = "translate(-50%) scale(0)"
                notesContaineroverflow.scrollTop = 0; 
                notesContaineroverflow.scrollLeft = 0;  
                if (editedAreaInput.value === "") {
                    editedAreaInput.value = "My Note"
                }

                noteHeader.textContent = editedAreaInput.value;
                noteText.textContent = editedTextInput.value;
                editEDclose()
                notesContaineroverflow.style.overflowY = "auto";
                //date
               
                dateNote.innerHTML = `<i class="fa-regular fa-calendar"></i>${mont} ${monthName} ${Year.toString().substr(-2)} - ${hours}:${minutes} ${ampm} <span>Edited</span>`;
            
            })

            document.addEventListener("mousedown", (e) => {
                if (searchBox.value == "") {
                    noteswrap.style.display = "flex";
                }
            })
           
        }
        okBackBtn.addEventListener("click", () =>{
            index()
            editClose()    
            updateNote()
            notesContaineroverflow.style.overflowY = "auto";
        })


       

        
        searchBox.addEventListener("keyup", (e) =>{
            
            const noteswrap = document.querySelectorAll(".notes-wrap")
            const noteHeader = document.querySelectorAll(".note-title")
            const noteText = document.querySelectorAll(".note-text")
            var filter = searchBox.value.toUpperCase()

             for (i = 0; i < noteswrap.length; i++) {
                a = noteswrap[i].getElementsByClassName("note-title")[0];
                b = noteswrap[i].getElementsByClassName("note-title")[0];
                txtValue = a.textContent || a.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    noteswrap[i].style.display = "flex";
                } else {
                    noteswrap[i].style.display = "none";
                }
            }

        })

        

