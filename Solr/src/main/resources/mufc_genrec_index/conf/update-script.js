/*
  This is a basic skeleton JavaScript update processor.

  In order for this to be executed, it must be properly wired into solrconfig.xml; by default it is commented out in
  the example solrconfig.xml and must be uncommented to be enabled.

  See http://wiki.apache.org/solr/ScriptUpdateProcessor for more details.
*/

function processAdd(cmd) {

	doc = cmd.solrDoc;
	field_names = doc.getFieldNames().toArray();
	for(i=0; i < field_names.length; i++) {
		field_name = field_names[i];
		if (field_name != "itemid_s") { 
			field_value = doc.getFieldValue(field_name);
			if(field_value != null) {
				field_final = field_value.split(" ");
				doc.setField(field_name,null);
				for (j=0;j<field_final.length;j++){
					doc.addField(field_name,field_final[j]);
				}				
			}
		}
	}
}

function processDelete(cmd) {
  // no-op
}

function processMergeIndexes(cmd) {
  // no-op
}

function processCommit(cmd) {
  // no-op
}

function processRollback(cmd) {
  // no-op
}

function finish() {
  // no-op
}
