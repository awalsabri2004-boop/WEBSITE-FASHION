function handleNewsletter(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            btn.textContent = '✓ Subscribed!';
            btn.style.background = '#2d6a4f';
            e.target.reset();
            setTimeout(() => {
                btn.textContent = 'Subscribe';
                btn.style.background = '';
            }, 3000);
        }

