import {Title, Section, Callout, Paragraph, Code, Quote, UList, KbdKey} from "@/components/MarkupWidgets/Tags.js"
import metadataList from "@/api/blog/postsData"
import BubbleScrollBar from "@/components/BubbleScrollBar/BubbleScrollBar"



export const metadata = metadataList.page

const QUOTE_COLOR = "#07f4"
const KEY_COLOR = "#00a2ff"

const sections = [
	{
		label: "Screenshoots",
		id: "screenshoots"
	},
	{
		label: "Clipboard",
		id: "clipboard"
	},
	{
		label: "Desktops",
		id: "desktops"
	},
	{
		label: "Windows Apps",
		id: "apps"
	},
]


export default function Page(){ return (<>

	<Title>
		Poductivity Windows Shortcuts
	</Title>

	<Section title="Screenshoots" id="screenshoots" sticky>
		<Callout label="info">This shortcut allow us to make screenshoots with diferent shapes</Callout>
		<Paragraph>
			This shortcut have 4 options for the shape of the screenshoot region
		</Paragraph>
		<UList items={[
			<><b>Square</b> → Draw a square of the region we want to capture</>,
			<><b>Free-form</b> → Draw a custom shape of the region we want to capture</>,
			<><b>Window</b> → Select a window to capture (<i>chrome, excell, settings, …</i>)</>,
			<><b>Fullscreen</b> → Capture the whole screen</>
		]}/>
		<Quote title="Shortcut" color={QUOTE_COLOR}>
			<KbdKey>WIN</KbdKey> + <KbdKey>Shift</KbdKey> + <KbdKey>S</KbdKey>
		</Quote>
	</Section>


	<Section title="Clipboard" id="clipboard" sticky>
		<Callout label="info">We can enable the clipboard history so we can copy many things and select what to paste from the history</Callout>
		<Quote title="Shortcut" color={QUOTE_COLOR}>
			<KbdKey>WIN</KbdKey> + <KbdKey>V</KbdKey>
		</Quote>
	</Section>


	<Section title="Desktops" id="desktops" sticky>
		<Callout label="info">Using multiple desktops allow us to organize our workspace and have a cleaner view of our opened apps</Callout>
		<Paragraph>
			We can open a new desktop to hide some program that we want to keep it active but dont want to see like music apps such as <i>spotify</i> or <i>itunes</i>.
		</Paragraph>
		<Quote title="Shortcut: Open desktops view" color={QUOTE_COLOR}>
			<KbdKey>WIN</KbdKey> + <KbdKey>TAB</KbdKey>
		</Quote>
		<Quote title="Shortcut: Rotate between desktops" color={QUOTE_COLOR}>
			<KbdKey>Ctrl</KbdKey> + <KbdKey>WIN</KbdKey> + <i>{"left/right arrows"}</i>
		</Quote>
	</Section>


	<Section title="Windows apps" id="apps" sticky>
		<Callout label="info">We have shortcuts for some windows apps such as the file explorer, magnifier, task manager, …</Callout>
		<Quote title="Shortcut: Open pinned app (Task Bar) (N representes the index of the app in the task bar, the at the bottom of the screen)" color={QUOTE_COLOR}>
			<KbdKey>WIN</KbdKey> + <b>N</b>
		</Quote>
		<Quote title="Shortcut: Open File Explorer" color={QUOTE_COLOR}>
			<KbdKey>WIN</KbdKey> + <KbdKey>E</KbdKey>
		</Quote>
		<Quote title="Shortcut: Task Manager" color={QUOTE_COLOR}>
			<KbdKey>Ctrl</KbdKey> + <KbdKey>Shift</KbdKey> + <KbdKey>ESC</KbdKey>
		</Quote>
		<Quote title="Shortcut: Settings" color={QUOTE_COLOR}>
			<KbdKey>WIN</KbdKey> + <KbdKey>I</KbdKey>
		</Quote>
		<Quote title="Shortcut: Magnifier" color={QUOTE_COLOR}>
			<KbdKey>WIN</KbdKey> + <KbdKey>+</KbdKey>
			<br/>
			<br/>
			<i>With the magnifier opened:</i>
			<br/>
			<br/>
			<KbdKey>WIN</KbdKey> + <KbdKey>+</KbdKey> → Zoom In
			<br/>
			<KbdKey>WIN</KbdKey> + <KbdKey>-</KbdKey> → Zoom Oun
		</Quote>
	</Section>


	<BubbleScrollBar sections={sections} />

</>)}