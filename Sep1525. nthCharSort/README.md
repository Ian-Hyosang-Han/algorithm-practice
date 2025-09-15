### Problem Description

<p>Given a list of strings <code>strings</code> and an integer <code>n</code>, sort the list in ascending order based on the character at index <code>n</code> of each string. For example, if <code>strings</code> is ["sun", "bed", "car"] and <code>n</code> is 1, sort by the characters "u", "e", and "a" at index 1 of each word.</p>

<h5>Constraints</h5>

<ul>
<li><code>strings</code> is an array with a length between 1 and 50.</li>
<li>Each element of <code>strings</code> consists of lowercase English letters.</li>
<li>The length of each element of <code>strings</code> is between 1 and 100.</li>
<li>The length of every element of <code>strings</code> is greater than <code>n</code>.</li>
<li>If multiple strings have the same character at index 1, the lexicographically earlier string should come first.</li>
</ul>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>strings</th>
<th>n</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>["sun", "bed", "car"]</td>
<td>1</td>
<td>["car", "bed", "sun"]</td>
</tr>
<tr>
<td>["abce", "abcd", "cdx"]</td>
<td>2</td>
<td>["abcd", "abce", "cdx"]</td>
</tr>
</tbody>
      </table>
<h5>Example Explanation</h5>

<p><strong>Example 1</strong><br>
The characters at index 1 of "sun", "bed", and "car" are "u", "e", and "a", respectively. Sorting based on these characters results in ["car", "bed", "sun"].</p>

<p><strong>Example 2</strong><br>
The characters at index 2 of "abce", "abcd", and "cdx" are "c", "c", and "x", respectively. Therefore, after sorting, "cdx" is placed last. Between "abce" and "abcd", lexicographical order places "abcd" first, so the answer is ["abcd", "abce", "cdx"].</p>
