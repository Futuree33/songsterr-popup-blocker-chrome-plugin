const removeAnnoyingElements = () => {
    try {
        // 1. Hide overlay
        const overlay = document.getElementById('hide-layer-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            console.log('🛑 Hid #hide-layer-overlay');
        }

        // 2. Remove popup div by class
        const popupDiv = document.querySelector('#app > div.rq25k');
        if (popupDiv) {
            popupDiv.remove();
            console.log('🗑️ Removed #app > div.rq25k');
        }

        // 3. Remove fallback popup
        const fallbackDiv = document.querySelector('#app > div:nth-child(6)');
        if (fallbackDiv) {
            fallbackDiv.remove();
            console.log('🗑️ Removed fallback popup (#app > div:nth-child(6))');
        }

        // 4. Remove apptab overlay
        const apptabDiv = document.querySelector('#apptab > section.Cip1ht > div');
        if (apptabDiv) {
            apptabDiv.remove();
            console.log('🗑️ Removed #apptab > section.Cip1ht > div');
        }

        // 5. Remove controls popup
        const controlsDiv = document.querySelector('#controls > div.Cto1rx');
        if (controlsDiv) {
            controlsDiv.remove();
            console.log('🗑️ Removed #controls > div.Cto1rx');
        }

        // 6. Remove YouTube embed wrapper
        const ytEmbed = document.querySelector('#youtube-video-container > div.D5a2ak > div.D5an6');
        if (ytEmbed) {
            ytEmbed.remove();
            console.log('🗑️ Removed YouTube embed div');
        }

        // 7. Remove showroom
        const showroom = document.querySelector('#showroom');
        if (showroom) {
            showroom.remove();
            console.log('🗑️ Removed #showroom');
        }

        // Restore scrolling
        document.body.style.overflow = 'auto';

    } catch (e) {
        console.warn('⚠️ Error removing elements:', e);
    }
};

// Run immediately and every 1 second
removeAnnoyingElements();
setInterval(removeAnnoyingElements, 10);
