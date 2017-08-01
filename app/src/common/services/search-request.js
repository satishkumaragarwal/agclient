(function(window) {
  'use strict';
  window.SearchRequest = function() {
    var _pagination = {
      page: 1,
      limit: 250
    };
    var _sort = {};
    var _search = [];
    var _fields = [];
    var _additionalSearch = [];

    var _encodeSort = function() {
      return (!!_sort.property ? 'order=' + _sort.property + ' ' + (_sort.isDesc ? 'desc' : 'asc') : '');
    };

    var _encodePagination = function() {
      return 'page=' + _pagination.page + '&limit=' + _pagination.limit;
    };

    var _concatenate = function(result, next) {
      if (!result) {
        return next;
      }

      if (!next) {
        return result;
      }

      return result + '&' + next;
    };

    var _encodeFields = function() {
      return (!!_fields && _fields.length > 0 ? 'fields=' + _fields.join() : '');
    };

    var _encodeSearch = function() {
      return !!_search && !_.isEmpty(_search) ? 'q=' + _.map(_search, function(query) {
        return !!query ? query.field + query.oper + (query.value + '').trim() : undefined;
      }).join(',') : '';
    };

    var _encodeAdditionalSearch = function() {
      return !!_additionalSearch && !_.isEmpty(_additionalSearch) ? _.map(_additionalSearch, function(query) {
        return !!query ? query.field + query.oper + (query.value + '').trim() : undefined;
      }).join('&') : '';
    };

    this.pagination = function(pagination) {
      if (pagination === undefined) {
        //return _pagination;
      } else {
        _pagination = pagination;
        return _pagination;
      }
    };

    this.page = function(page) {
      if (page === undefined) {
        return _pagination.page;
      } else {
        _pagination.page = page;
        return _pagination.page;
      }
    };

    this.limit = function(limit) {
      if (limit === undefined) {
        return _pagination.limit;
      } else {
        _pagination.page = limit;
        return _pagination.page;
      }
    };

    this.fields = function(fields) {
      if (fields === undefined) {
        return _fields;
      } else {
        _fields = fields;
        return _fields;
      }
    };


    this.sort = function(sort) {
      if (sort === undefined) {
        return _sort;
      } else {
        _sort = sort;
        return _sort;
      }
    };

    this.search = function(search) {
      if (search === undefined) {
        return _search;
      } else {
        _search = search;
        return _search;
      }
    };

    this.additionalSearch = function(additionalSearch) {
      if (additionalSearch === undefined) {
        return _additionalSearch;
      } else {
        _additionalSearch = additionalSearch;
        return _additionalSearch;
      }
    };

    this.urlEncoded = function() {
      return _([_encodePagination(), _encodeSort(), _encodeAdditionalSearch(), _encodeSearch(), _encodeFields()]).reduce(_concatenate);
    };
  };
})(window, document);
