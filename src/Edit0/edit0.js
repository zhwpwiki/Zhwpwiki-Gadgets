// [[en:MediaWiki:Gadget-edittop.js]]

// **********************************************************************
// **                 ***WARNING GLOBAL GADGET FILE***                 **
// **             changes to this file affaect many users.             **
// **           please discuss on the talk page before editing         **
// **                                                                  **
// **********************************************************************
// Imported from [[:en:User:Alex Smotrov/edittop.js]], version as of: 2007-06-19T04:28:52
// Updated from [[:en:User:TheDJ/Gadget-edittop.js]], version as of: 2009-04-28T11:54:22

if ($.inArray(mw.config.get('wgAction'), ['view', 'purge']) !== -1 && mw.config.get('wgNamespaceNumber') >= 0) {
	$(function edittop_hook() {
		var localtitles = {
			bg: 'Редактиране на началото',
			bn: 'সূচনা অনুচ্ছেদ সম্পাদনা করুন',
			cs: 'Editovat úvodní sekci',
			en: 'Edit lead section',
			fa: 'ویرایش بخش آغازین',
			fr: 'Modifier le résumé introductif',
			id: 'Sunting bagian atas',
			it: 'Modifica della sezione iniziale',
			ja: '導入部を編集',
			kk: 'Кіріспе бөлімді өңдеу',
			min: 'Suntiang bagian ateh',
			ko: '도입부를 편집',
			pa: 'ਸੋਧ',
			pt: 'Editar a seção superior',
			'pt-br': 'Editar a seção superior',
			sr: 'Уреди уводни део',
			vi: 'Sửa phần mở đầu'
		};
		localtitles.zh = localtitles['zh-hans'] = localtitles['zh-cn'] = localtitles['zh-sg'] = localtitles['zh-my'] = '编辑首段';
		localtitles['zh-hant'] = localtitles['zh-hk'] = localtitles['zh-mo'] = localtitles['zh-tw'] = '編輯首段';

		var our_content = $('#content, #mw_content').first();
		var span1 = our_content.find('span.mw-editsection:not(.plainlinks)').first();
		if (!span1.length) return;
		var span0 = span1.clone();

		$('#mw_header h1, #content h1').first().append(span0);
		span0.find('a').each(function(idx) {
			var a = $(this);
			var href = a.attr('href') || '';
			a.attr('title', localtitles[mw.config.get('wgUserLanguage')] || localtitles.zh);
			if (!/&(ve|)section=T/.test(href)) { // not transcluded
				a.attr('href', href.replace(/&(ve|)section=\d+/, '&$1section=0&summary=/*%20top%20*/%20'))
			} else if (/&vesection=/.test(href)) { // transcluded, VE
				a.attr('href', mw.util.getUrl(mw.config.get('wgPageName')) + '?veaction=edit&vesection=0&summary=/*%20top%20*/%20')
			} else { // transcluded, not VE
				a.attr('href', mw.util.getUrl(mw.config.get('wgPageName')) + '?action=edit&section=0&summary=/*%20top%20*/%20')
			}
		})
	})
}