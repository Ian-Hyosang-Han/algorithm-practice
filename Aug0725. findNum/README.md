### Problem Description

<p>Given two integers <code>num</code> and <code>k</code> as parameters, complete the function <code>solution</code> to return the position of the digit <code>k</code> within the number <code>num</code> if it exists. If <code>k</code> is not present, return -1. The position should be based on a 1-indexed format (starting from 1).</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>0 &lt; <code>num</code> &lt; 1,000,000</li>
<li>0 ≤ <code>k</code> &lt; 10</li>
<li>If <code>k</code> appears multiple times in <code>num</code>, return the position of its first occurrence.</li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>num</th>
<th>k</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>29183</td>
<td>1</td>
<td>3</td>
</tr>
<tr>
<td>232443</td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>123456</td>
<td>7</td>
<td>-1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Explanation</h5>

<p>Example #1</p>

<ul>
<li>In 29183, the digit 1 is at the 3rd position.</li>
</ul>

<p>Example #2</p>

<ul>
<li>In 232443, the digit 4 first appears at the 4th position.</li>
</ul>

<p>Example #3</p>

<ul>
<li>In 123456, the digit 7 is not present, so return -1.</li>
</ul>