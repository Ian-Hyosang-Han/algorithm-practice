### Problem Description

<p>Given strings <code>myString</code> and <code>pat</code>, complete the function <code>solution</code> that returns the number of times <code>pat</code> appears in <code>myString</code>.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ <code>myString</code> ≤ 1000</li>
<li>1 ≤ <code>pat</code> ≤ 10</li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>myString</th>
<th>pat</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"banana"</td>
<td>"ana"</td>
<td>2</td>
</tr>
<tr>
<td>"aaaa"</td>
<td>"aa"</td>
<td>3</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li>In "banana", "ana" appears once at indices 1–3 and once more at indices 3–5, so it appears a total of two times. Therefore, return 2.</li>
</ul>

<p>Example #2</p>

<ul>
<li>In "aaaa", "aa" appears once at indices 0–2, once at 1–3, and once at 2–4, so it appears a total of three times. Therefore, return 3.</li>
</ul>