import Patch from './patch';
  static createNull() {
    return new this(nullFile, nullFile, Patch.createNull());
  }

  getHunkAt(bufferRow) {
    return this.getPatch().getHunkAt(bufferRow);
  }

  getBuffer() {
    return this.getPatch().getBuffer();
  getHunkLayer() {
    return this.getPatch().getHunkLayer();
  }

  getUnchangedLayer() {
    return this.getPatch().getUnchangedLayer();
  }

  getAdditionLayer() {
    return this.getPatch().getAdditionLayer();
  }

  getDeletionLayer() {
    return this.getPatch().getDeletionLayer();
  }

  getNoNewlineLayer() {
    return this.getPatch().getNoNewlineLayer();
  }

  // TODO delete if unused
  // TODO delete if unused
  // TODO delete if unused
  adoptBufferFrom(prevFilePatch) {
    this.getPatch().adoptBufferFrom(prevFilePatch.getPatch());
  }

        patch: this.getOldSymlink() ? this.getPatch().clone({status: 'deleted'}) : this.getPatch(),
        patch: this.getNewSymlink() ? this.getPatch().clone({status: 'added'}) : this.getPatch(),