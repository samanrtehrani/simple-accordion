(function() {
    let selectors = {
        itemSelector: '.accordion-item',
        rootSelector: '.accordion',
        contentSelector: '.item-content',
        titleSelector: '.item-title'
    };
    if (document.readyState != 'loading') {
        let accordions = new SimpleAccordion(selectors, { enabled: true, openingDuration: 200, closingDuration: 200, resolution: 5 });
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            let accordions = new SimpleAccordion(selectors, { enabled: true, openingDuration: 200, closingDuration: 200, resolution: 5 });
        });
    }
})();