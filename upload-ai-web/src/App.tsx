import { Button } from '@/components/ui/button'
import { FileVideo, Github, Upload, Wand2 } from 'lucide-react'
import { Separator } from './components/ui/separator'
import { Textarea } from './components/ui/textarea'
import { Label } from './components/ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from './components/ui/slider'

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai by @dwtoledo</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Use the AI to transcript a video and generate YouTube titles and
            descriptions
          </span>

          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              placeholder="Insert the prompt for the AI..."
              className="resize-none p-4 leading-relaxed"
            ></Textarea>
            <Textarea
              placeholder="Result generated by AI..."
              className="resize-none p-4 leading-relaxed"
              readOnly
            ></Textarea>
          </div>
          <p className="text-sm text-muted-foreground">
            Remember: You can use the variable{' '}
            <code className="text-violet-400">{'{transcription}'}</code> in your
            prompt to add the selected video transcription.
          </p>
        </div>
        <aside className="w-80 space-y-8">
          <form className="space-y-6">
            <Label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Select a video
            </Label>
            <input
              className="sr-only"
              type="file"
              id="video"
              accept="video/mp4"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription-prompt">
                Transcription&apos;s prompt
              </Label>
              <Textarea
                placeholder="Insert tags mentioned on selected video separated by comma (,)"
                id="transcription-prompt"
                className="h-20 leading-relaxed"
              />
            </div>
            <Button type="submit" className="w-full">
              Upload video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title-result">YouTube title</SelectItem>
                  <SelectItem value="description-result">
                    YouTube description
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Select defaultValue="gpt35" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt35">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground italic">
                New options available soon!
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider min={0} max={1} step={0.1} />
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                When values are high, the results tend to be more imaginative,
                although potential errors may occur.
              </p>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Generate
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}
