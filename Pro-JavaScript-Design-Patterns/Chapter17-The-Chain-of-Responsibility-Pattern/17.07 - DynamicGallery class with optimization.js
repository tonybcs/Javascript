/* DynamicGallery class. */

var DynamicGallery = function(id) { // implements Composite, GalleryItem
  ...
}
DynamicGallery.prototype = {
  add: function(child) { ... },
  remove: function(child) { ... },
  getChild: function(i) { ... },
  hide: function() {
  	// 优化：从hide方法中删除将方法调用传递给子节点的那部分代码
    this.element.style.display = 'none';
  },
  show: function() { ... },
  getElement: function() { ... }
};
