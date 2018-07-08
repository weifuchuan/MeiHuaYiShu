interface Tree {
  val: number;
  right: Tree | null;
  left: Tree | null;
}

function* ZhongXu(tree: Tree | null): IterableIterator<number> {
  if (tree) {
    yield tree.val;
    yield* ZhongXu(tree.left)
    yield* ZhongXu(tree.right)
  } else {
    return
  }
}

class TreeInterator {
  private tree: Tree | null;
  private iter: IterableIterator<number>;
  private next: IteratorResult<number>;
  constructor(tree: Tree | null) {
    this.tree = tree;
    this.iter = ZhongXu(tree);
    this.next = this.iter.next();
  }
  has_next(): boolean {
    return !this.next.done;
  }
  next_value(): number {
    const v = this.next.value
    this.next = this.iter.next();
    return v;
  }
}