const loadCatrogoy = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => loadManuDisplay(data.categories))
    .catch(error => console.log(error))
}

//  active button add kora function 
const loadActiveButton = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(res => res.json())
    .then(data => {
      activeRemoveKora();
      const activeBtn = document.getElementById(`btn-${id}`)
      activeBtn.classList.add('active')
      loadMainCategoroyDisplay(data.data)
    }

    )
    .catch(error => console.log(error));
}
const activeRemoveKora = () => {
  const buttons = document.getElementsByClassName('acBtn');
  for (let btn of buttons) {
    btn.classList.remove('active')
  }
}

const loadManuDisplay = (datas) => {
  const manuContiner = document.getElementById('manu')
  datas.forEach((item) => {
    const buttonContainer = document.createElement('div')

    buttonContainer.innerHTML = `
     
      <button id='btn-${item.category}' onclick='loadActiveButton("${item.category}")' class='border rounded-2xl border-cyan-200 px-20 py-4 acBtn'>
      <img   src="${item.category_icon}" alt=" " class="w-10 h-10  ">
          <span class='font-bold'>${item.category}</span>
     </button>
      
  
     `

    manuContiner.append(buttonContainer)

  });
};
loadCatrogoy()

const loadMainCategoroy = () => {
  fetch('https://openapi.programming-hero.com/api/peddy/pets')
    .then(res => res.json())
    .then(data => loadMainCategoroyDisplay(data.pets))
    .catch(error => console.log(error))
}

const loadMainCategoroyDisplay = (lodaMCaterogoy) => {
  const loaddisPlayContainer = document.getElementById('loadDisplay');
  loaddisPlayContainer.innerHTML = '';

  if (lodaMCaterogoy == 0) {
    loaddisPlayContainer.classList.remove('grid')
    loaddisPlayContainer.innerHTML = `
    <div class=' w-full justify-center flex flex-col gap-5 items-center'>
      <img src="/images/error.webp" alt="" />
      <h2 class='font-bold text-2xl text-center'>No Informaition Available</h2>
      <p cless='text-center'>It is a long established fact that a reader
       will be distrxter by the reacdlecontent ofa page when looking  at <br />  
       its layout the point of using lorem ipsum is the</p>
    </div>

    `;
    return;
  } else {
    loaddisPlayContainer.classList.add('grid')
  }

  lodaMCaterogoy.forEach((item) => {
    const divContainer = document.createElement('div');

    divContainer.innerHTML = `
   <div class="card  bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src="${item.image}" alt="Shoes" class="rounded-xl h-full w-full" />
  
  </figure>
  
  <div class="card-body ">
        <h3 class='font-bold text-2xl'> ${item.pet_name}</h3>
         <div class='flex gap-2'>
          <img class='w-[20px] ' src="https://img.icons8.com/?size=96&id=n9IKS3yfXwF7&format=png" alt="" />
         <h3 '>Breed: ${item.breed}</h3>
         </div>
         <div class='flex gap-2'>
          <img class='w-[20px] ' src="https://img.icons8.com/?size=100&id=60611&format=png" alt="" />
         <h3>Brith: ${item.date_of_birth}</h3>
         </div>
         <div class='flex gap-2'>
          <img class='w-[20px] ' src="https://img.icons8.com/?size=160&id=70834&format=png" alt="" />
         <h3>Gender: ${item.gender}</h3>
         </div>
         <div class='flex gap-2'>
          <img class='w-[20px] ' src="https://img.icons8.com/?size=100&id=aTrWEDlg4xEW&format=png" alt="" />
         <h3>Price: ${item.price}</h3>
         </div>
        

    <div class="card-actions justify-between pt-5">
   <img class=' btn border border-cyan-200 rounded ' src="https://img.icons8.com/?size=48&id=82788&format=png" alt="" />
      <button class="btn border border-cyan-200 rounded"> Adopt </button>
      <button class="btn  ">Detalis</button>
    </div>
  </div>
</div>
    `;
    loaddisPlayContainer.append(divContainer);
  });
}

loadMainCategoroy()






// const loadActiveButton = (id) => {
//   fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
//     .then(res => res.json())
//     .then(data => {
//       activeRemoveKora();
//       const activeBtn = document.getElementById(`btn-${id}`)
//       activeBtn.classList.add('active')
//       loadMainCategoroyDisplay(data.data)
//     }

//     )
//     .catch(error => console.log(error));
// }
// const activeRemoveKora = () => {
//   const buttons = document.getElementsByClassName('acBtn');
//   for (let btn of buttons) {
//     btn.classList.remove('active')
//   }
// }

// const loadManuDisplay = (datas) => {
//   const manuContiner = document.getElementById('manu')
//   datas.forEach((item) => {
//     const buttonContainer = document.createElement('div')

//     buttonContainer.innerHTML = `
     
//       <button id='btn-${item.category}' onclick='loadActiveButton("${item.category}")' class='border rounded-2xl border-cyan-200 px-20 py-4'>
//       <img   src="${item.category_icon}" alt=" " class="w-10 h-10  acBtn">
//           <span class='font-bold'>${item.category}</span>
//      </button>
      
  
//      `

//     manuContiner.append(buttonContainer)

//   });
// };
// loadCatrogoy()