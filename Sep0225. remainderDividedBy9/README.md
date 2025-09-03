### Problem Description

<p>It is known that the remainder of a non-negative integer divided by 9 is equal to the remainder of the sum of its digits divided by 9.<br>
Using this fact, when a non-negative integer is given as a <strong>string</strong> <code>number</code>, please write the function <code>solution</code> that returns the remainder when this integer is divided by 9.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ length of <code>number</code> ≤ 100,000</li>
<li>All characters of <code>number</code> are digits.</li>
<li>If <code>number</code> is not the integer 0, it does not start with the digit '0'.</li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>number</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"123"</td>
<td>6</td>
</tr>
<tr>
<td>"78720646226947352489"</td>
<td>2</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li>In Example 1, <code>number</code> is 123 and the sum of its digits is 6. The remainder when 6 is divided by 9 is 6, and indeed 123 = 9 × 13 + 6. Therefore, return 6.</li>
</ul>

<p>Example #2</p>

<ul>
<li>In Example 2, <code>number</code> is 78720646226947352489 and the sum of its digits is 101. The remainder when 101 is divided by 9 is 2, and indeed 78720646226947352489 = 9 × 8746738469660816943 + 2. Therefore, return 2.</li>
</ul>
