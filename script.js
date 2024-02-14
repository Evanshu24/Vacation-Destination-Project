(function(){
  
  var detailsform=document.querySelector('#Destination_Details_form');

detailsform.addEventListener('submit',handleFormsubmit);

function handleFormsubmit(event){
    event.preventDefault();

    var destName=event.target.elements['name'].value;
    var destLocation=event.target.elements['location'].value;
    var destPhoto=event.target.elements['photo'].value;
    var destDescription=event.target.elements['description'].value;

    for(var i=0;i<detailsform.length;i++){
       detailsform.elements[i].value="";
    }
   
    var destCard=createDestinationCard(destName,destLocation,destPhoto,destDescription);
    //creating new card from here//

    var wishListContainer=document.getElementById('destinations_container');

    if(wishListContainer.children.length==0){
      document.getElementById('title').innerHTML="My Wish List";
    }
    
    wishListContainer.appendChild(destCard);
}

function createDestinationCard(name,location,photoURL,description){
    
  var card=document.createElement('div');
  card.className="card";

  var img=document.createElement('img');
  img.setAttribute('alt',name);

  var constantPhotoUrl="images/signpost.jpg";

  if(photoURL.length===0){
    img.setAttribute('src',constantPhotoUrl);
  }
   
  else{
    img.setAttribute('src',photoURL);
  }
  
  card.appendChild(img);

  var cardBody=document.createElement('div');
  card.className='card-body';

  var cardTitle=document.createElement('h3');
  cardTitle.innerText=name;
  cardBody.appendChild(cardTitle);

  var cardSubtitle=document.createElement('h4');
  cardSubtitle.innerText=location;
  cardBody.appendChild(cardSubtitle);

  if(description.length!==0){
    var cardtext=document.createElement('p');
    cardtext.className='card-text';
    cardtext.innerText=description;
    cardBody.appendChild(cardtext);
  }

  var cardDeleteBtn=document.createElement('button');
  cardDeleteBtn.innerText="Remove";

  cardDeleteBtn.addEventListener('click',removeDestination);
  cardBody.appendChild(cardDeleteBtn);

  card.appendChild(cardBody);

  return card;
}

function removeDestination(event){
   var card=event.target.parentElement.parentElement;
   card.remove();
}

})();

