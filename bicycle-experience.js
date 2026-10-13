// Interactive architecture panel. All text reflects the documented Group 2 prototype.
(() => {
  const systems = {
    balance: {
      number: '01 / 04 — FEEDBACK CONTROL',
      title: 'Staying upright.',
      description: 'An MPU6050 measures lean and angular velocity. An LQR controller adjusts the thrust of two drone motors to correct the tilt, keeping the bicycle within roughly ±1° of the target in documented tests.',
      tags: ['MPU6050', 'LQR', 'BLDC MOTORS']
    },
    steering: {
      number: '02 / 04 — DIRECTION',
      title: 'Choosing a direction.',
      description: 'A DS5160 servo turns the front fork through a chain-and-sprocket mechanism. The first belt-drive prototype slipped under load, so the team switched to a chain, while noting that backlash still needs improvement.',
      tags: ['DS5160 SERVO', 'CHAIN DRIVE', 'ESP-NOW']
    },
    drive: {
      number: '03 / 04 — PROPULSION',
      title: 'Getting things moving.',
      description: 'A three-phase rear hub motor is driven by a Phaserunner V2 motor controller. An ESP32 sends throttle and electronic-brake commands, while a wheel-speed sensor was wired for future development.',
      tags: ['HUB MOTOR', 'PHASERUNNER V2', 'ESP32']
    },
    control: {
      number: '04 / 04 — COMMUNICATION',
      title: 'One connected system.',
      description: 'The custom ESP32 remote uses sliders, switches and a TFT screen to send commands over ESP-NOW without a Wi-Fi router. The final prototype was remotely controlled rather than fully autonomous.',
      tags: ['ESP-NOW', 'TFT DISPLAY', 'HANDHELD REMOTE']
    }
  };

  const buttons = [...document.querySelectorAll('[data-system]')];
  const title = document.getElementById('bike-system-title');
  const count = document.getElementById('bike-system-count');
  const description = document.getElementById('bike-system-description');
  const tags = document.getElementById('bike-system-tags');

  if (!buttons.length || !title || !count || !description || !tags) return;

  function selectSystem(key) {
    const system = systems[key];
    if (!system) return;

    count.textContent = system.number;
    title.textContent = system.title;
    description.textContent = system.description;
    tags.replaceChildren(...system.tags.map((value) => {
      const tag = document.createElement('span');
      tag.textContent = value;
      return tag;
    }));

    buttons.forEach((button) => {
      const active = button.dataset.system === key;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    document.querySelectorAll('[data-system-node]').forEach((node) => {
      node.classList.toggle('is-selected', node.dataset.systemNode === key);
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => selectSystem(button.dataset.system));
  });
})();
