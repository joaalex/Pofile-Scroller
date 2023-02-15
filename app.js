// Iterator Profile Scoller

const data=[
  {
    name: 'Ola Joa',
    age: 32,
    gender: 'Male',
    lookingfor: 'female',
    location: 'Lagos, IKJ',
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: 'Bee Jay',
    age: 37,
    gender: 'Male',
    lookingfor: 'female',
    location: 'Ogun, ABK',
    image: "https://randomuser.me/api/portraits/men/79.jpg"
  },
  {
    name: 'Tea Wer',
    age: 28,
    gender: 'Female',
    lookingfor: 'male',
    location: 'Oyo, IBD',
    image: "https://randomuser.me/api/portraits/women/16.jpg"
  }
];

//Profile Iterator
const profiles =profileIterator(data);

// Next Event.
document.getElementById('next').addEventListener('click',  nextProfile);

nextProfile();


// Next Profile Display Function
function nextProfile(){
  const currentProfile = profiles.next().value;
  if(currentProfile){
    document.getElementById('profileDisplay').innerHTML =`
    <ul class="list-group"> 
      <li class="list-group-item"> Name: ${currentProfile.name} </li>
      <li class="list-group-item"> Age: ${currentProfile.age} </li>
      <li class="list-group-item"> Location: ${currentProfile.location} </li>
      <li class="list-group-item"> Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor} </li>
    </ul>
  `;

  document.getElementById('imageDisplay').innerHTML =`
    <img src="${currentProfile.image}">
  `
  } else {
    // After there is no more profile, reload the page.
    document.location.reload();
  }
};


// Profile Iterator.
function profileIterator(profile){
  let nextIndex = 0;
  return{
    next: function(){
      return nextIndex < profile.length ?
      { value: profile[nextIndex++], done: false } :
      {done: true}
    }
  };
};