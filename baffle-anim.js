const text = baffle('.baffle');
text.set({
  characters: '!@#$%^&*()-+=!@#$%^&*()-+=[]{}|;:,./<>?',
  speed: 200
});
text.start();
text.reveal(10000);