const seconds = document.querySelector('.seconds') as HTMLElement;
const minutes = document.querySelector('.minutes') as HTMLElement;
const hour = document.querySelector('.hour') as HTMLElement;

// Create spikes
for (let s = 0; s < 60; s++) {
  const mSpikeEl = document.createElement('i');
  const sSpikeEl = document.createElement('i');
  mSpikeEl.className = 'spike';
  sSpikeEl.className = 'spike';
  mSpikeEl.style.setProperty('--rotate', `${6 * s}deg`);
  sSpikeEl.style.setProperty('--rotate', `${6 * s}deg`);
  mSpikeEl.setAttribute('data-i', s.toString());
  sSpikeEl.setAttribute('data-i', s.toString());

  seconds.appendChild(sSpikeEl);
  minutes.appendChild(mSpikeEl);
}

function getTime() {
  const date = new Date();
  const s = date.getSeconds();
  const m = date.getMinutes();
  const h = date.getHours() % 12;

  hour.textContent = h.toString();
  
  minutes.style.setProperty('--dRotate', `${6 * m}deg`);
  seconds.style.setProperty('--dRotate', `${6 * s}deg`);
}

setInterval(getTime, 1000);
getTime();
