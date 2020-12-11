package main

import "fmt"

var arr = [][]float64{{1, 2, 3}, {4, 5, 6}, {7}}

func main() {
	if cap(arr) == 0 || cap(arr[0]) == 0 {
		return
	}

	result := make([][]float64, len(arr[0]))
	for i := range result {
		result[i] = make([]float64, len(arr))
	}
	for i, row := range arr {
		for j, v := range row {
			result[len(arr[0])-1-j][i] = v
		}
	}
	fmt.Println(result)
}


$ grep -r 18403 ./ | grep generated_design


.//production.log.20201108.0020:I, [2020-11-08T13:51:54.566699 #15944]  INFO -- : Started GET "/app?generated_design_id=18403" for 114.144.99.247 at 2020-11-08 13:51:54 +0900
.//production.log.20201108.0020:I, [2020-11-08T13:51:54.568986 #15944]  INFO -- :   Parameters: {"generated_design_id"=>"18403", "host"=>"rakrak-design.raksul.com"}
.//production.log.20201108.2020:I, [2020-11-08T13:51:54.377065 #16470]  INFO -- : Redirected to https://rakrak-design.raksul.com/app?generated_design_id=18403
.//production.log.20201108.0020:I, [2020-11-08T13:51:57.633884 #18961]  INFO -- : Started GET "/api/v1/me/generated_designs/18403?time=1604811115501" for 114.144.99.247 at 2020-11-08 13:51:57 +0900
.//production.log.20201108.2020:I, [2020-11-08T13:51:58.816974 #17440]  INFO -- : Started PUT "/api/v1/me/generated_designs/18403/snapshot?time=1604811116684" for 114.144.99.247 at 2020-11-08 13:51:58 +0900
.//production.log.20201108.2020:I, [2020-11-08T13:51:58.818657 #17440]  INFO -- :   Parameters: {"design_template_id"=>217693, "design_extension"=>{"texts"=>[{"group"=>"main", "label"=>"heading", "sort_no"=>0, "ext"=>{"horizontal_align"=>"center", "color"=>"#00520f", "scale"=>1}}, {"group"=>"main", "label"=>"lead", "sort_no"=>0, "ext"=>{"horizontal_align"=>"left", "font_family"=>"UD Shin Go Medium JIS2004", "color"=>nil, "scale"=>1.05}}, {"group"=>"sub", "label"=>"heading", "sort_no"=>1, "ext"=>{"horizontal_align"=>"left", "vertical_align"=>"middle", "font_family"=>"UD Shin Go Bold JIS2004", "color"=>nil, "scale"=>1}}, {"group"=>"sub", "label"=>"description", "sort_no"=>1, "ext"=>{"vertical_align"=>"middle", "color"=>nil}}, {"group"=>"profile", "label"=>"organization_name", "sort_no"=>0, "ext"=>{"font_family"=>"UD Shin Go Bold JIS2004", "color"=>nil, "scale"=>1}}, {"group"=>"profile", "label"=>"address", "sort_no"=>0, "ext"=>{"vertical_align"=>"middle", "font_family"=>"UD Shin Go Medium JIS2004", "color"=>"#ffffff", "scale"=>1.1}}, {"group"=>"profile", "label"=>"contact", "sort_no"=>0, "ext"=>{"font_family"=>"UD Shin Go Bold JIS2004", "color"=>"#ffffff", "scale"=>1}}, {"group"=>"profile", "label"=>"other", "sort_no"=>0, "ext"=>{"color"=>nil}}], "images"=>[{"group"=>"main", "sort_no"=>0, "ext"=>{"crop"=>{"offset"=>{"x_ratio"=>-0.02261561117573939, "y_ratio"=>-0.012546296145171151}, "size"=>{"width_ratio"=>1.045231222351479, "height_ratio"=>1.025092592290342}}}}, {"group"=>"sub", "sort_no"=>1, "ext"=>{}}, {"group"=>"map", "sort_no"=>0, "ext"=>{"crop"=>{"offset"=>{"x_ratio"=>0.1348527040829321, "y_ratio"=>0.12369099634747592}, "size"=>{"width_ratio"=>0.5740306835377486, "height_ratio"=>0.7653742447169979}}}}], "stamps"=>[]}, "layout"=>{"msi_enabled"=>true, "ss_count"=>1, "psl_enabled"=>false, "psm_enabled"=>true}, "version"=>"mobile", "browser"=>"desktop", "time"=>"1604811116684", "host"=>"rakrak-design.raksul.com", "generated_design_id"=>"18403", "snapshot"=>{"version"=>"mobile", "layout"=>{"msi_enabled"=>true, "ss_count"=>1, "psl_enabled"=>false, "psm_enabled"=>true}}}
.//production.log.20201108.2020:I, [2020-11-08T13:52:23.652328 #18586]  INFO -- : Started GET "/me/user_designs/3324366/delete" for 114.144.99.247 at 2020-11-08 13:52:23 +0900
.//production.log.20201108.0020:I, [2020-11-08T13:52:36.109147 #18961]  INFO -- : Started GET "/me/user_designs/3324366/delete" for 114.144.99.247 at 2020-11-08 13:52:36 +0900
.//production.log.20201108.0006:E, [2020-11-08T13:53:26.124443 #25338] ERROR -- : Error performing DeleteDesignJob (Job ID: 3cfe6fc1-f025-4441-b8a9-0ba0b0771efd) from Sidekiq(default) in 50003.89ms: ActiveRecord::LockWaitTimeout (Mysql2::Error::TimeoutError: Lock wait timeout exceeded; try restarting transaction: UPDATE `generated_designs` SET `deleted_at` = '2020-11-08 04:52:36', `updated_at` = '2020-11-08 04:52:36' WHERE `generated_designs`.`id` = 18403):
.//production.log.20201108.0006:E, [2020-11-08T13:54:55.437222 #25338] ERROR -- : Error performing DeleteDesignJob (Job ID: 3cfe6fc1-f025-4441-b8a9-0ba0b0771efd) from Sidekiq(default) in 50004.97ms: ActiveRecord::LockWaitTimeout (Mysql2::Error::TimeoutError: Lock wait timeout exceeded; try restarting transaction: UPDATE `generated_designs` SET `deleted_at` = '2020-11-08 04:54:05', `updated_at` = '2020-11-08 04:54:05' WHERE `generated_designs`.`id` = 18403):

deleted at 2020-11-08 04:55:14
od_design_id 3324366
