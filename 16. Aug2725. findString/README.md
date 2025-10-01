### Problem Description

<p>Given strings <code>myString</code> and <code>pat</code> consisting of alphabetic characters, complete the function <code>solution</code> that returns 1 if <code>pat</code> exists among the contiguous substrings of <code>myString</code>, and 0 otherwise.</p>

<p>Uppercase and lowercase letters are not distinguished.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ length of <code>myString</code> ≤ 100,000</li>
<li>1 ≤ length of <code>pat</code> ≤ 300</li>
<li>Both <code>myString</code> and <code>pat</code> are strings consisting of alphabetic characters.</li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>myString</th>
<th>pat</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"AbCdEfG"</td>
<td>"aBc"</td>
<td>1</td>
</tr>
<tr>
<td>"aaAA"</td>
<td>"aaaaa"</td>
<td>0</td>
</tr>
</tbody>
      </table>
<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li>The substring of "AbCdEfG" at indices 0–2 is "AbC", which is the same as <code>pat</code> "aBc". Therefore, return 1.</li>
</ul>

<p>Example #2</p>

<ul>
<li>Since the length of <code>myString</code> is shorter than that of <code>pat</code>, there cannot be a substring of <code>myString</code> equal to <code>pat</code>. Therefore, return 0.</li>
</ul>