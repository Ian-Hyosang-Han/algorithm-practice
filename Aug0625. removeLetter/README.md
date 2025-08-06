### Problem Description

<p>Given a string <code>my_string</code> and a character <code>letter</code> as parameters, complete the function <code>solution</code> to return a new string with all instances of <code>letter</code> removed from <code>my_string</code>.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ Length of <code>my_string</code> ≤ 100</li>
<li><code>letter</code> is a single English alphabet character.</li>
<li><code>my_string</code> and <code>letter</code> consist of only alphabetic characters (uppercase and lowercase).</li>
<li>Uppercase and lowercase letters are distinguished.</li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>my_string</th>
<th>letter</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"abcdef"</td>
<td>"f"</td>
<td>"abcde"</td>
</tr>
<tr>
<td>"BCBdbe"</td>
<td>"B"</td>
<td>"Cdbe"</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Explanation</h5>

<p>Example #1</p>

<ul>
<li>Removing "f" from "abcdef" results in "abcde".</li>
</ul>

<p>Example #2</p>

<ul>
<li>Removing all instances of "B" from "BCBdbe" results in "Cdbe".</li>
</ul>