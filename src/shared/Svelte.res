type writable<'a> = {
    update: (('a) => 'a) => unit
  }

@bs.module("svelte/store") external writable: ('a) => writable<'a> = "writable"
