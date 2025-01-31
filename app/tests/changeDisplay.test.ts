import { beforeEach, describe, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

describe('Overview Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('changes the display', () => {
    const overviewStore = useOverviewStore()
    expect(overviewStore.displayType).toBe('list')

    overviewStore.changeDisplay('grid')

    expect(overviewStore.displayType).toBe('grid')
  })
})