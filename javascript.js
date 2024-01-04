function updateTime() {
    const clock = document.getElementById('clock');
    const now = new Date();
    let hours = now.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Format minutes (two digits)
    const timeString = `${hours}:${minutes} ${amPm}`;
    clock.textContent = timeString; // Update the time in the clock element

    // Update every second
    setTimeout(updateTime, 1000);
  }

  // Call updateTime function to start updating the time
  updateTime();


  
  
  