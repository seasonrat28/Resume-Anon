document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  const profileTrigger = document.querySelector('.profile-trigger');
  const profileModal = document.querySelector('#profile-modal');
  const profileModalClose = document.querySelector('.profile-modal-close');

  if (profileTrigger && profileModal && profileModalClose) {
    const closeProfileModal = () => {
      profileModal.hidden = true;
      document.body.classList.remove('modal-open');
      profileTrigger.focus();
    };

    profileTrigger.addEventListener('click', () => {
      profileModal.hidden = false;
      document.body.classList.add('modal-open');
      profileModalClose.focus();
    });

    profileModalClose.addEventListener('click', closeProfileModal);
    profileModal.addEventListener('click', (event) => {
      if (event.target === profileModal) closeProfileModal();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !profileModal.hidden) closeProfileModal();
    });
  }
});
