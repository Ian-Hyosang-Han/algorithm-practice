### Problem Description

<p>The Caesar cipher is an encryption method where each alphabet in a sentence is shifted by a certain distance to become another alphabet. For example, if "AB" is shifted by 1, it becomes "BC"; if shifted by 3, it becomes "DE". If "z" is shifted by 1, it becomes "a". Complete the function <code>solution</code> that takes a string <code>s</code> and a distance <code>n</code> and returns the encrypted string where each character in <code>s</code> is shifted by <code>n</code>.</p>

<h5>Constraints</h5>

<ul>
<li>Spaces remain unchanged regardless of the shift.</li>
<li><code>s</code> consists only of lowercase letters, uppercase letters, and spaces.</li>
<li>The length of <code>s</code> is less than or equal to 8000.</li>
<li><code>n</code> is an integer between 1 and 25.</li>
</ul>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>n</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"AB"</td>
<td>1</td>
<td>"BC"</td>
</tr>
<tr>
<td>"z"</td>
<td>1</td>
<td>"a"</td>
</tr>
<tr>
<td>"a B z"</td>
<td>4</td>
<td>"e F d"</td>
</tr>
</tbody>
      </table>
