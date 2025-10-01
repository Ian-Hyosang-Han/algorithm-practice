### Problem Description

<p>The string <code>s</code> consists of one or more words. Each word is separated by one or more spaces. Complete the function <code>solution</code> that returns a new string where, for each word, the even-indexed letters are converted to uppercase and the odd-indexed letters are converted to lowercase.</p>

<h5>Constraints</h5>

<ul>
<li>The even/odd index must be determined separately for each word, not across the entire string.</li>
<li>The first character of each word is considered index 0, and thus should be treated as an even position.</li>
</ul>

<h5>Input/Output Examples</h5>
<table class="table">
        <thead><tr>
<th>s</th>
<th>return</th>
</tr>
</thead>
        <tbody><tr>
<td>"try hello world"</td>
<td>"TrY HeLlO WoRlD"</td>
</tr>
</tbody>
      </table>
<h5>Example Explanation</h5>

<p>"try hello world" consists of three words: "try", "hello", and "world".  
Converting each word so that even-indexed characters are uppercase and odd-indexed characters are lowercase results in "TrY", "HeLlO", and "WoRlD".  
Therefore, the function should return "TrY HeLlO WoRlD".</p>
