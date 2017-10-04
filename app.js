throttle('#throttle-field', 'input').subscribe(value =>
  print('#throttle-output', value)
);

debounce('#debounce-field', 'input', 500).subscribe(value =>
  print('#debounce-output', value)
);

function print(el, val) {
  if (!val) return;
  var data = document.createElement('pre');
  data.innerHTML = val;
  document.querySelector(el).appendChild(data);
}
