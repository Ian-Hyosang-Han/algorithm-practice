### Problem Description

<p>Given a string <code>myString</code>, split it using "x" as the delimiter to create an array, then return the array sorted in lexicographical order.</p>

<p>However, do not include empty strings in the returned array.</p>

<hr>

<h5>Constraints</h5>

<ul>
<li>1 ≤ <code>myString</code> ≤ 100,000
<ul>
<li><code>myString</code> consists of lowercase English letters.</li>
</ul></li>
</ul>

<hr>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>myString</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"axbxcxdx"</td>
<td>["a","b","c","d"]</td>
</tr>
<tr>
<td>"dxccxbbbxaaaa"</td>
<td>["aaaa","bbb","cc","d"]</td>
</tr>
</tbody>
      </table>
<hr>

<h5>Example Explanation</h5>

<p>Example #1</p>

<ul>
<li>The array obtained by splitting <code>myString</code> by "x" is ["a","b","c","d"], and this array is already sorted lexicographically. Therefore, return this array.</li>
</ul>

<p>Example #2</p>

<ul>
<li>The array obtained by splitting <code>myString</code> by "x" is ["d","cc","bbb","aaaa"]. Sorting this array lexicographically yields ["aaaa","bbb","cc","d"], so return this array.</li>
</ul>
