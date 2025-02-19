/**
 * Collapsible tables
 *
 * Allows tables to be collapsed, showing only the header. See [[Wikipedia:NavFrame]].
 *
 * @version 2.0.3 (2014-03-14)
 * @source https://www.mediawiki.org/wiki/MediaWiki:Gadget-collapsibleTables.js
 * @author [[User:R. Koot]]
 * @author [[User:Krinkle]]
 * @deprecated Since MediaWiki 1.20: Use class="mw-collapsible" instead which
 * is supported in MediaWiki core.
 */
(function($, mw) {
	var autoCollapse = 2;
	var collapseCaption = wgULS('隐藏', '隱藏');
	var expandCaption = wgULS('显示', '顯示');
	var tableIndex = 0;

	function collapseTable(tableIndex) {
		var Button = document.getElementById('collapseButton' + tableIndex);
		var Table = document.getElementById('collapsibleTable' + tableIndex);
		if (!Table || !Button) return false;

		var Rows = Table.rows;
		var i;
		if (Button.firstChild.data === collapseCaption) {
			for (i = 1; i < Rows.length; i++) {
				Rows[i].style.display = 'none'
			}
			Button.firstChild.data = expandCaption;
		} else {
			for (i = 1; i < Rows.length; i++) {
				Rows[i].style.display = Rows[0].style.display
			}
			Button.firstChild.data = collapseCaption
		}
	}

	function createClickHandler(tableIndex) {
		return function(e) {
			e.preventDefault();
			collapseTable(tableIndex)
		}
	}

	function createCollapseButtons($content) {
		var NavigationBoxes = {};
		var $Tables = $content.find('table');
		var i;

		$Tables.each(function(i, table) {
			if ($(table).hasClass('collapsible')) {

				/* only add button and increment count if there is a header row to work with */
				var HeaderRow = table.getElementsByTagName('tr')[0];
				if (!HeaderRow) return;
				var Header = table.getElementsByTagName('th')[0];
				if (!Header) return;

				NavigationBoxes[tableIndex] = table;
				table.setAttribute('id', 'collapsibleTable' + tableIndex);

				var Button = document.createElement('span');
				var ButtonLink = document.createElement('a');
				var ButtonText = document.createTextNode(collapseCaption);
				// Styles are declared in [[MediaWiki:Common.css]]
				Button.className = 'collapseButton';

				ButtonLink.style.color = Header.style.color;
				ButtonLink.setAttribute('id', 'collapseButton' + tableIndex);
				ButtonLink.setAttribute('href', '#');
				$(ButtonLink).on('click', createClickHandler(tableIndex));
				ButtonLink.appendChild(ButtonText);

				Button.appendChild(document.createTextNode('['));
				Button.appendChild(ButtonLink);
				Button.appendChild(document.createTextNode(']'));

				Header.insertBefore(Button, Header.firstChild);
				tableIndex++
			}
		});

		for (i = 0; i < tableIndex; i++) {
			if ($(NavigationBoxes[i]).hasClass('collapsed') ||
				(tableIndex >= autoCollapse && $(NavigationBoxes[i]).hasClass('autocollapse'))) {
				collapseTable(i)
			} else if ($(NavigationBoxes[i]).hasClass('innercollapse')) {
				var element = NavigationBoxes[i];
				while ((element = element.parentNode)) {
					if ($(element).hasClass('outercollapse')) {
						collapseTable(i);
						break
					}
				}
			}
		}
	}

	mw.hook('wikipage.content').add(createCollapseButtons);

})(jQuery, mw);