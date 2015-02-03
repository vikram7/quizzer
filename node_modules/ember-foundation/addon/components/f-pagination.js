import FComponent from './f-component';

export default FComponent.extend({
  actions: {
    changePage: function(page) {
      if (page === this.get('currentPage')) {
        return;
      }

      this.set('currentPage', page);
      this.sendAction('changePage', page);
    },

    nextPage: function() {
      if (this.get('onLastPage')) {
        return;
      }

      this.set('currentPage', this.get('currentPage') + 1);
      this.sendAction('changePage', this.get('currentPage'));
    },

    previousPage: function() {
      if (this.get('onFirstPage')) {
        return;
      }

      this.set('currentPage', this.get('currentPage') - 1);
      this.sendAction('changePage', this.get('currentPage'));
    }
  },

  'aria-label': 'Pagination',

  attributeBindings: ['aria-label', 'role'],

  classNames: ['pagination'],

  onFirstPage: function() {
    return this.get('currentPage') === 1;
  }.property('currentPage'),

  onLastPage: function() {
    return this.get('currentPage') === this.get('totalPages');
  }.property('currentPage', 'totalPages'),

  pages: function() {
    var currentPage = this.get('currentPage');
    var pages = [];
    var totalPages = this.get('totalPages');

    for (var i = 1; i <= totalPages; i++) {
      pages.push({
        current: (i === currentPage),
        number: i
      });
    }

    return pages;
  }.property('currentPage', 'totalPages'),

  role: 'menubar',

  tagName: 'ul'
});
