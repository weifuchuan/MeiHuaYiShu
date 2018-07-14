import * as React from 'react';
import { View, ViewStyle, WebView, Text, Dimensions, ScrollView } from 'react-native';
import { observer } from 'mobx-react/native';
import { gua } from '../../types';
import { observable } from 'mobx';

const { ListRow, Select } = require('teaset');

// import qian from '../../assets/bagua/qian';
// import dui from '../../assets/bagua/dui';
// import li from '../../assets/bagua/li';
// import zhen from '../../assets/bagua/zhen';
// import xun from '../../assets/bagua/xun';
// import kan from '../../assets/bagua/kan';
// import geng from '../../assets/bagua/geng';
// import kun from '../../assets/bagua/kun';

const { Overlay } = require('teaset');
const { width, height } = Dimensions.get('window');

@observer
export default class LeiXiang extends React.Component<{ style?: ViewStyle }> {
	@observable guaWord: gua.GuaW = '乾';

	render() {
		return (
			<View style={{ flex: 1, backgroundColor:"#fff" }}>
				<ListRow
					title={'卦：'}
					topSeparator={'full'}
					bottomSeparator={'full'}
					accessory={
						<Select
							items={gua.words.slice(1)}
							getItemValue={(item: string) => item}
							getItemText={(item: string) => item}
							value={this.guaWord}
							pickerTitle={'起卦方式'}
							pickerType={'popover'}
							onSelected={(item: gua.GuaW) => {
								this.guaWord = item;
							}}
						/>
					}
				/>
				<View style={{ flex: 1, padding: 5 }}>{this.getSource(this.guaWord)}</View>
			</View>
		);
	}

	getSource(w: gua.GuaW): React.ReactElement<any> {
		switch (w) {
			case '乾':
				return qian;
			case '兑':
				return dui;
			case '离':
				return li;
			case '震':
				return zhen;
			case '巽':
				return xun;
			case '坎':
				return kan;
			case '艮':
				return geng;
			case '坤':
				return kun;
			default:
				return <View />;
		}
	}

	private static modal: any = null;

	static modalShow() {
		if (LeiXiang.modal) {
			Overlay.show(LeiXiang.modal);
		} else {
			Overlay.show(
				(LeiXiang.modal = (
					<Overlay.View
						style={{ alignItems: 'center', justifyContent: 'center' }}
						modal={false}
						overlayOpacity={0.6}
					>
						<View style={{ height: height * 0.8, width: width * 0.8, borderRadius: 5 }}>
							<LeiXiang />
						</View>
					</Overlay.View>
				))
			);
		}
	}
}

const qian = (
	<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
		<Text selectable={true} style={{ fontSize: 18 }}>五行：金</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>天时：天、冰、雹、霰。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>地理：西北方、京都、大郡、形胜之地、高亢之所。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人物：君父、大人、老人、长者、宦官、名人、公门人。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人事：刚健勇武、果决、多动少静、高上下屈。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>身体：首、骨、肺。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>时序：秋、九十月之交、戌亥年月日时、五金年月日时。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>动物：马、天鹅、狮、象。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>静物：金玉、宝珠、圆物、木果、刚物、冠、镜。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>屋舍：公府、楼台、高堂、大厦、驿舍、西北向之居。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>家宅：秋占宅兴隆、夏占有祸、冬占冷落、春占吉利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>婚姻：贵官之眷、有声名之家、秋占宜成、冬夏占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>饮食：马肉、珍味、多骨、肝肺、干肉、木果、诸物之首、圆物、辛辣之物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>生产：易生、秋占生贵子、夏占有损、坐宜向西北。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求名：有名、宜随朝内任、刑官、武职、掌权、宜向西北之任、天使、驿官。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谋望：有成、利公门、宜动中有财、夏占不成、冬占多谋少遂。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>交易：宜金玉、宝珠、贵货、易成、夏占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求利：有财、金玉之利、公门中得财、秋占大利、夏占损财、冬占无财。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>出行：利于出行、宜入京师、利西北之行、夏占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谒见：利见大人、有德行之人、宜见官贵、可见。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>疾病：头面之疾、肺疾、筋骨疾、上焦病、夏占不安。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>官讼：健讼、有贵人助、秋占得胜、夏占失理。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>坟墓：宜向西北、宜乾山气脉、宜天穴、宜高、秋占出贵、夏占大凶。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>方道：西北。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五色：大赤色、玄色。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>姓字：带金傍者、商音、行一四九。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>数目：一、四、九。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五味：辛、辣。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>
			官司，诉讼，交通安全，破财，检举，走私，绑架，取缔，违警，罚单，与父、长辈、师长、上司、客户、公门互动不良、顶撞冲突，晴天清朗，性情刚强，行动，果断，正直，尊重，有贵人，有财，金钱，有获父、长辈、师长、上司、客户、公门赏识或表扬，金融机构，公证结婚，法院，筋骨，痔疮，肺，大肠，皮毛，头，父，60岁以上，脸，公务人员，冰，雹，京都，高亢之所，大人，老人，名人，公门中人，马，天鹅，狮，象，金，玉，珠宝，圆物，镜子，刚物，秋天，高堂，大厦，赤色，辛辣，龙眼，荔枝，豆，粟，栗，背，官帽，功名。
		</Text>
	</ScrollView>
);

const dui = (
	<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
		<Text selectable={true} style={{ fontSize: 18 }}>天时：雨泽、新月、星。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>地理：泽、水际、缺池、废井、山崩坡裂之地、其地为刚卤。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人物：少女、妾、歌妓、伶人、译人、巫师。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人事：喜悦、口舌、谗毁、谤说、饮食。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>身体：舌、口、肺、痰、涎。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>时序：秋八月、酉年月日时、金年月日、二四九数月。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>静物：金刃、金类、乐器、缺器、废物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>动物：羊、泽中之物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>屋舍：西向之居、近泽之居、败墙壁宅、户有损。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>家宅：不安、防口舌、秋占喜悦、夏占家宅有祸。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>婚姻：不成、秋占可成、又喜、主成婚之吉、利婚少女、夏占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>生产：不利、恐有损胎、或利生女、夏占不利、生宜向西。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求名：难成、因名有损、利西之任、宜刑官、武职、伶官、译官。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求利：无利有损、财利主口舌、秋占有财喜、夏占破财。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>出行：不宜远行、防口舌、或损失、宜西行、秋占宜有利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>交易：不利、防口舌、有争竞、夏占不利、秋占有交易之财喜。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谋望：难成、谋中有损、秋占有喜、夏占不遂。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谒见：利行西方见、有咒诅。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>疾病：口舌咽喉之疾、气逆喘疾、饮食不冫食。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>坟墓：宜西向、防穴中有水、近泽之墓、夏占不宜、或葬废穴。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>官讼：争论不已、曲直未决、因公有损、防刑、秋占为体得理胜讼。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>姓字：商音、带口带金字傍姓氏、行位四二九。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>数目：四、二、九。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>方道：西方。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五色：白。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五味：辛辣。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>
			钩心斗角，口舌争吵，毁谤，破坏，诅咒，破财，情色，交际应酬，言语互动不够，损坏，讲习，宴会，特种行业，非议，喜悦，竞争，不下雨也阴天，口碑好，有桃花机会或赐财，金钱，肺，声，眉毛，舌，口，痰，咽喉，气喘，扁桃腺发炎，饮食不调，么女，孙女，么媳，么嫂，妾，媒人，30岁以下，雨泽，星星，水际，废井，破裂地，歌妓，巫师，羊，豹，豺，泽中生物，金属，乐器，废坏器物，秋天，败坏墙壁屋宅，白色，辛辣，烧饼，猿，仆婢主宾之乐，糖饼，石榴，胡桃。
		</Text>
	</ScrollView>
);

const li = (
	<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
		<Text selectable={true} style={{ fontSize: 18 }}>天时：日、电、虹、霓、霞。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>地理：南方、干亢之地、窑、灶、炉冶之所、刚爆厥地、其地面阳。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人物：中女、文人、大腹、目疾人、介胄之士。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人事：文画之所、聪明才学、相见虚心、书事。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>身体：目、心、上焦。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>时序：夏五月、午火年月日时、三二七日。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>静物：雉、龟、鳖、蟹、螺、蚌。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>屋舍：南舍之居、阳明之宅、明窗、虚室。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>家宅：安稳、平善、冬占不安、克体主火灾。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>饮食：雉肉、煎炒、烧炙之物、干脯之类、热肉。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>婚姻：不成、利中女之婚、夏占可成、冬占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>生产：易生、产中女、科占有损、坐宜向南。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求名：有名、宜南方之职、文官之任、宜炉冶坑场之职。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求利：有财、宜南方求、有文书之财、冬占有失。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>交易：可成、宜有文书之交易。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谋望：可以谋望、宜文书之事。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>出行；可行、宜动向南方、就文书之行、冬占不宜行、不宜行舟。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谒见：可见南方人、冬占不顺、秋见文书考察才士。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>官讼：易散、文书动、辞讼明辩。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>疾病：目疾、心疾、上焦、热病、夏占伏暑、时疫。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>坟墓：南方之墓、无树木之所阳穴、夏占出文人、冬占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>姓字：徵音、带火及立人傍姓氏、位行三二七。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>数目：三、二、七。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>方道：南。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五色：赤、紫、红。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五味：苦。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>
			脾气暴躁，意气用事，性急，疑心，血光，火安全，破财，契约，担保，标会，订单，忧虑，受气，失理智，心浮，心虚，烦，晴天，逃避现实，厌世，不当借贷，目，心，火气大，小肠，瞎子，血脉，高血压，口臭，中暑，聪明，热心，明理，虚心，次女，次孙女，次媳，二嫂，31-45岁，现实，极端，太阳，电，虹霞，干燥地，窖灶，炉冶之所，文人，大腹，目疾人，龟，鳖，蟹，螺，蚌，雉，文书，干戈，干物，夏天，明窗，阳明屋宅，红色，苦味，尖物，文画之所，烹饪，妇人。
		</Text>
	</ScrollView>
);

const zhen = (
	<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
		<Text selectable={true} style={{ fontSize: 18 }}>天时：雷。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>地理：东方、树木、闹市、大途、竹林、草木茂盛之所。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>身体：足、肝、发、声音。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人物：长男。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人事：起动、怒、虚惊、鼓噪、多动、少静。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>时序：春三月、卯年月日时、四三八月日。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>静物：木竹、萑苇、乐器（属竹木者）、花草繁鲜之物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>动物：龙、蛇。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>屋舍：东向之居、山木之处、楼阁。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>家宅：宅中不时有虚惊、春占吉、秋占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>饮食：蹄、肉、山林野味、鲜肉、果酸味、菜蔬。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>婚姻：可有成、声名之家、利长男之婚、秋占不宜婚。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求利：山林竹木之财、宜东方求财、动处求财、或山林竹木茶货之利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求名：有名、宜东方之任、施号发令之职、掌刑狱之官、有茶竹木税课之任、或闹市司货之职。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>生产：虚惊、胎动不安、头胎必生男、生宜东向、秋占必有损。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>疾病：足疾、肝经之疾、惊怖不安。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谋望：可望、可求、宜动中谋、秋占不遂。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>交易：利于成交、秋占难成、山林木竹茶货之利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>官讼：健讼、有虚惊、行移取勘反复。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谒见：可见、宜见山林之人、利见宜有声名之人。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>出行：宜向利于东方、利山林之人、秋占不宜行，但恐虚惊。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>坟墓：利于东向、山林中穴、秋不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>姓字：角音、带木姓氏、行位四八三。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>数目：四、八、三。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>方道：东。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五味：酸味。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五色：青、绿、碧。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>
			暴力，震怒，鼓噪，虚惊，恐吓，性情激动，身体疲倦，怪异，雷，地震，足，发，胆，声音，决断，稳重，过动，抗争，长子，长孙，40-60岁，冲动，不能冷静，警告，树木，闹市，大路旁，竹林，草木茂盛之所，龙，蛇，竹木乐器，花草类物，春天，楼阁，山林之处，青色，酸味，家中老大，芋头，蜂，蝶，白鹭，鹤，鲤鱼，面食，包子，旅途，将帅，工匠，兵车。
		</Text>
	</ScrollView>
);

const xun = (
	<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
		<Text selectable={true} style={{ fontSize: 18 }}>天时：风。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>地理：东南方之地、草木茂秀之所、花果菜园。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人物：长女、秀士、寡妇之人、山林仙道之人。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人事：柔和、不定、鼓舞、利市三倍、进退不果。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>身体：股肱、气、风疾。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>时序：春夏之交、三五八之月日时、三月、辰巳年月日时。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>静物：木香、绳、直物、长物、竹木、工巧之器。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>动物；鸡、百禽、山林中之禽虫。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>屋舍：东南向之居、寺观楼园、山林之居。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>家宅：安稳利市、春占吉、秋占不安。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>饮食：鸡肉、山林之味、蔬菜、酸味。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>婚姻：可成、宜长女之婚、秋占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>生产：易生、头胎产女、秋占损胎、宜向东南坐。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求名：有名、宜文职有风宪之力、宜入风宪、宜茶课竹木税货之职、宜东南之任。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求利：有利三倍、宜山林之利、秋占不吉、山林木货之类。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谋望：可谋望、有财、可成、秋占多谋少遂。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>出行：可行、有出入之利、宜向东南行、秋占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谒见：可见、利见山林之人、利见文人秀士。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>疾病：股肱之疾、风疾、肠疾、中风、寒邪、气疾。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>姓字：角音、草木傍之姓氏、行位五三八。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>官讼：宜和、恐遭风宪之责。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>坟墓；宜东南方向、山林之穴、多树木、秋占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>数目：五、三、八。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>方道：东南。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五味：酸味。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五色：青绿、碧、洁白。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>
			造谣中伤，闲言闲语，卑鄙，条件，有风，风评，醋意，忌妒，说服，甜言蜜语，风凉话，气不顺，放屁，疝气，风疾，胆，筋，臗股，屁股，痛风，风湿痛，风寒感冒，中风，精神病，肝，经痛，长女，长孙女，长媳，大嫂，46-60岁，家庭，嚎啕，蔬菜，艰苦，奴婢，鼓舞，坚吝，鄙野，柔和，风，花果菜园，草木茂美之处，寡妇，修道之人，茶，扇，帆，香，臭，羽毛，山林，百禽，绳，直长物，竹木巧物，春天，寺庙，楼园，山居，青绿色，酸味。
		</Text>
	</ScrollView>
);

const kan = (
	<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
		<Text selectable={true} style={{ fontSize: 18 }}>天时：雨、月、雪、霜、露。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>地理：北方、江湖、溪涧、泉井、卑湿之地（沟渎池沼、凡有水处）。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人物：中男、江湖之人、舟人、盗贼。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人事：险陷卑下、外示以柔、内存以刚、漂泊不成、随波逐流。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>身体：耳、血、肾。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>时序：冬十一月、子年月日时、一六之月日。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>静物：水带子、带核之物、弓轮矫揉之物、酒器、水具。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>动物：豕、鱼、水中之物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>屋舍：向北之居、近水、水阁、江楼、茶酒肆、宅中湿地之处。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>饮食：豕肉、酒、冷味、海味、羹汤酸味、宿食、鱼、带血、淹藏、有带核之物、水中之物、多骨之物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>家宅：不安一暗昧、防盗。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>婚姻：利中男之婚、宜北方之姻、不利成婚、不可婚辰戌丑未月。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>生产：难产有险、宜次胎、中男、辰戌丑未月有损、宜北向。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求名：艰难、恐有灾陷、宜北方之任、鱼盐河泊之职、酒兼醋。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求利：有失、宜水边财、恐有失陷、宜鱼盐、酒货之利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>交易：不利成交、恐防失陷、宜水边交易、宜鱼盐酒货之交易、或点水人之交易。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谋望：不宜谋望、不能成就、秋冬占可谋望。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>出行：不宜远行、宜涉舟、宜北方之行、防盗、恐遇险阻陷溺之事。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谒见：难见、宜见江湖之人、或有水傍姓氏之人。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>疾病：耳痛、心疾、感寒、肾病、胃冷水泻、痼冷之病、血病。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>官讼：不利、有阴险、有失困讼、失陷。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>坟墓：宜北向之穴、近不旁之墓、不利葬。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>姓字：羽音、点水傍之姓氏、行位一六。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>数目：一、六。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>方道：北方。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五味：咸酸。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五色：黑。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>
			不够积极，心性不定，情绪不稳，犹豫不决，诈欺，心机，投机，鲁莽，水安全，酒家，酒，饮食误事，不良份子，扒，偷，抢，雨天，学坏，淹水，好动，顽皮，乖巧，稳重，积极，成熟，羊水破裂，直肠，膀胱，扁桃腺发炎，糖尿病，红斑性狼疮，腹泻，食物中毒，耳，血，肾，经痛，背，次子，次孙，31-45岁，月亮，雪，露水，江湖，溪涧，卑湿地，江湖人，盗贼，水中生物，带核物，弓，轮物，酒器，麦，咸，水族馆，枣，梅，李，桃，奸，狡猾，燕，鹿，猪，泉中，鱼，盐，冷盘，羹汤，海产，腌味，险陷，漂泊不定。
		</Text>
	</ScrollView>
);

const geng = (
	<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
		<Text selectable={true} style={{ fontSize: 18 }}>天时：云、雾、山岚。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>地理：山、径路、近山城、丘陵、坟墓、东北方。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人物：少男、闲人、山中人。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人事：阻隔、宁静、进退不决、反背、止住、不见。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>身体：手指、骨、鼻、背。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>时序：冬春之月、十二月、丑寅年月日时、七五十月日。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>静物：土石、瓜果、黄物、土中之物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>动物：虎、狗、鼠、百兽、黔喙之物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>家宅：安稳、诸事有阻、家人不睦、春占不安。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>屋舍：东北方之居、山居、近石、近路之宅。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>饮食：土中物味、诸兽之肉、墓畔竹笋之属、野味。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>婚姻：阻隔难成、成亦迟、利少男童之婚、春占不利、宜对乡里婚。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求名：阻隔无名、宜东北方之任、宜上官山城之职。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求利：求财阻隔、宜山林中取财、春占不利、有损失。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>生产：难产、有险阻之厄、宜向东北、春占有损。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>交易：难成、有山林田土之交易、春占有失。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谋望：阻隔难成、进退不决。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>出行：不宜远行、有阻、宜近陆行。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谒见：不可见、有阻、宜见山林之人。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>疾病：手指之疾、脾胃之疾。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>官讼：贵人阻滞、未讼未解、牵连不决。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>坟墓：东北之穴、山中之穴、春占不利、近路边有石。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>姓字：宫音、带土字傍姓氏、行位五七十。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>数目：五、七、十。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>方道：东北方。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五色：黄。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五味：甘。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>
			不和，背叛，阻碍，停顿，叛逆，懒散，优柔寡断，游手好闲，进退不得，久雨将晴，勤快，刻苦，手，指，肱，鼻，胃，么子，么孙，30岁以下，云，雾，山，岚，近山城，丘陵，车库，墓，闲人，山居之人，别墅，狐，鼠，虎，狗，百兽，土石，瓜果，土中之物，奴仆，四季，近石山居，近路屋宅，黄色，甘味。
		</Text>
	</ScrollView>
);

const kun = (
	<ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
		<Text selectable={true} style={{ fontSize: 18 }}>天时：云阴、雾气。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>地理：田野、乡里、平地、西南方。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人物：老母、后母、农夫、乡人、众人、大腹人。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>人事：吝啬、柔顺、懦弱、众多。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>身体：腹、脾、胃、肉。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>时序：辰戌丑未月、未申年月日时、八五十月日。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>静物：方物、柔物、布帛、丝绵、五谷、舆、斧、瓦器。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>动物：牛、百兽、为牝马。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>屋舍：西南向、村居、田舍、短屋、土阶、仓库。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>家宅：安稳、多阴气、春占宅舍不安。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>饮食：牛肉、土中之物、甘味、野味、五谷之味、芋笋之物、腹脏之物。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>婚姻：利于婚姻、宜税产之家、乡村之家、或寡妇之家、春占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>生产：易产、春占难产、有损或不利于母、宜坐西南方。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求名：有名、宜西南方、或教官、农官守土之职、春占虚名。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>交易：宜利交易、宜田土交易、宜五谷利、贱货、重物、布帛、静中有财、春占不利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>求利：有利、宜土中之利、贱货重物之利、静中得财、春占无财、多中取利。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谋望：利求谋、邻里求谋、静中求谋、春占少遂、或谋于妇人。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>出行：可行、宜西南行、宜往乡里行、宜陆行、春占不宜行。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>谒见：可见、利见乡人、宜见亲朋或阴人、春不宜见。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>疾病：腹疾、脾胃之病、饮食停伤、谷食不化。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>官讼：理顺、得众情、讼当解散。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>姓字：宫音、带土姓人、行位八五十。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>数目：八、五、十。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>方道：西南。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五味：甘。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>五色：黄、黑。</Text>
		<Text selectable={true} style={{ fontSize: 18 }}>
			交通安全，缺乏主见，无奈，懦弱，吝啬，不信任，小人，阴人，顽固，阴天，亲切，和蔼，柔顺，慈祥，腹，脾，盲肠，肌肉，右肩，妻子，母，61岁以上，雾气，田野，乡里，平地，继母，农夫，乡人，众人，幼马，百兽，方物，柔物，五谷，米，山珍野味，瓦器，斧头，富家，庄家，商家，丑，鹅，书，布帛丝帛，四季，村居，田舍，矮屋，仓库，黄色，黑色，甘味，柄，文章，雀，鸦，鸽子。
		</Text>
	</ScrollView>
);
