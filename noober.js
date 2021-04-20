window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // loop througn the ride data
  for (let i=0; i<json.length; i++){
    // create a variable for the ride
    let ride = json[i]
    // create a variable for the HTML element
    let htmlElement = document.querySelector(`.rides`)
    
    // decide service level
    let levelOfService
    let border
    let textsize
    if (ride.purpleRequested == true) {
          levelOfService = `Noober Purple`
          border = `border-purple-900`
          textsize = `text-2xl`
      } else if (ride.numberOfPassengers > 3) {
          levelOfService = `Noober XL`
          border = `border-gray-900`
          textsize = `text-3xl`
      } else {
          levelOfService = `Noober X`
          border = `border-gray-900`
          textsize = `text-2xl`
      }

    // insert HMTL into the rides element
    
    htmlElement.insertAdjacentHTML(`beforeend`,
    `
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl ${textsize} bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService}</span>
      </h1>

      <div class="border-4 ${border} p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${ride.numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride.pickupLocation.address}</p>
            <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride.dropoffLocation.address}</p>
            <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
          </div>
        </div>
      </div>
    `
    )
  }
  
})